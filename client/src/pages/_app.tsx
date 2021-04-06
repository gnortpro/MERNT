import React from 'react';
import { useApollo } from 'core/apolloClient';
import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/dist/next-server/lib/router/router';

const App = ({ Component, pageProps }: AppProps) => {
    const client = useApollo(pageProps.initialApolloState);

    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
};

export default App;
