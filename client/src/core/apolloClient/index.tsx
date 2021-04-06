import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { useMemo } from 'react';
import { NextApiRequest, NextApiResponse, NextPage } from 'next';

// import { SchemaLink } from '@apollo/client/link/schema';

export interface GraphQlContext {
    req: NextApiRequest;
    res: NextApiResponse;
}

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function createIsomorphicLink(context: GraphQlContext | undefined) {
    /**
     * SSG and SSR
     */
    // if (typeof window === 'undefined') {
    //     const { SchemaLink } = require('@apollo/client/link/schema');
    //     const { graphQlSchema } = require('./schema');
    //     return new SchemaLink({ schema: graphQlSchema, context });
    // }

    /**
     * Client-side
     */
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { HttpLink } = require('@apollo/client');
    return new HttpLink({
        uri: 'http://localhost:5000',
        credentials: 'same-origin',
    });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createApolloClient(context?: GraphQlContext): ApolloClient<any> {
    return new ApolloClient({
        /**
         * Enable SSR mode when not running on the client-side
         */
        ssrMode: typeof window === 'undefined',
        link: createIsomorphicLink(context),
        cache: new InMemoryCache(),
    });
}

export const initializeApollo = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    initialState: any = null,
    // Pages with Next.js data fetching methods, like `getStaticProps`, can send
    // a custom context which will be used by `SchemaLink` to server render pages
    context?: GraphQlContext,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
): ApolloClient<any> => {
    const _apolloClient = apolloClient ?? createApolloClient(context);

    if (initialState) _apolloClient.cache.restore(initialState);
    
    if (typeof window === 'undefined') return _apolloClient;

    // Create the Apollo Client once in the client
    apolloClient = apolloClient ?? _apolloClient;

    return apolloClient;
};

export const getApolloClient = initializeApollo;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useApollo(initialState: any) {
    const apolloStore = useMemo(() => initializeApollo(initialState), [initialState]);
    return apolloStore;
}

export const withApollo = (Comp: NextPage) => (props: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    apolloState: any;
}) => {
    const apolloStore = useApollo(props.apolloState);
    return (
        <ApolloProvider client={apolloStore}>
            <Comp />
        </ApolloProvider>
    );
};
