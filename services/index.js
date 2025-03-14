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

export const getRecentPosts = async () => {
    const query = gql`
      query GetPostDetails {
        posts(
          orderBy: createdAt_ASC
          last: 3
        ) {
          title
          featuredImage {
            url
          }
          createdAt
          slug
        }
      }
    `;
    try {
        const result = await request(GRAPHQL_ENDPOINT, query);
        return result.posts; // Ensure this matches your GraphQL response structure
    } catch (error) {
        console.error("Error fetching recent posts:", error);
        return []; // Return an empty array or handle the error as needed
    }
};

export const getSimilarPosts = async (categories, slug) => {
    const query = gql`
      query GetPostDetails($slug: String!, $categories: [String!]) {
        posts(
          where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
          last: 3
        ) {
          title
          featuredImage {
            url
          }
          createdAt
          slug
        }
      }
    `;
    try {
        const result = await request(GRAPHQL_ENDPOINT, query, { slug, categories });
        return result.posts; // Ensure this matches your GraphQL response structure
    } catch (error) {
        console.error("Error fetching similar posts:", error);
        return []; // Return an empty array or handle the error as needed
    }
};

export const getCategories = async () => {
    const query = gql`
      query GetCategories {
          categories {
            name
            slug
          }
      }
    `;
  
    try {
        const result = await request(GRAPHQL_ENDPOINT, query);
        return result.categories; // Ensure this matches your GraphQL response structure
    } catch (error) {
        console.error("Error fetching categories:", error);
        return []; // Return an empty array or handle the error as needed
    }
};