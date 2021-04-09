import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { getApolloClient } from 'core/apolloClient';
import Layout from 'core/layout';

const GET_POSTS = gql`
    {
        getPosts {
            id
            body
            createdAt
            comments {
                id
                body
                username
                createdAt
            }
            likes {
                username
            }
        }
    }
`;

export const PostsPage = ({ posts }) => {
    return (
        <Layout title="Users List | Next.js + TypeScript Example">
            <div className="postsList">
                {posts?.map(post => (
                    <div key={post?.id}>
                        <p>{post?.body}</p>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export async function getStaticProps() {
    const apolloClient = getApolloClient({});

    const { data } = await apolloClient.query({
        query: GET_POSTS,
    });

    return {
        props: {
            posts: data?.getPosts,
        },
    };
}

export default PostsPage;
