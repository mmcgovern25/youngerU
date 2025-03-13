import { request, gql } from 'graphql-request';

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection {
                edges {
                    node {
                        author {
                            bio
                            name
                            id
                            photo {
                                url
                            }
                        }
                        createdAt
                        slug
                        title
                        excerpt
                        featuredImage {
                            url
                        }
                        category {
                            name
                            slug
                        }
                    }
                }
            }
        }
    `;

    try {
        const result = await request(GRAPHQL_ENDPOINT, query);
        return result.postsConnection.edges; // Ensure this matches your GraphQL response structure
    } catch (error) {
        console.error("Error fetching posts:", error);
        return []; // Return an empty array or handle the error as needed
    }
};