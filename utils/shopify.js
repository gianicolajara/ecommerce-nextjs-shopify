import axios from "axios";
import instance from "./axiosInstance";

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_DOMAIN;
const storeFrontAcessToken = process.env.NEXT_PUBLIC_STOREFRONT_ACCESS_TOKEN;

export const shopifyData = async (query, variables = {}) => {
  const url = `https://${domain}/api/2022-04/graphql.json`;

  try {
    const res = await axios.post(
      url,
      {
        query,
        variables,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": storeFrontAcessToken,
        },
      }
    );
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getProductByHandle = async (handle) => {
  const query = `query getProductByHandle($handle: String!) {
                    product(handle: $handle) {
                      title
                      description
                      productType
                      handle
                      featuredImage {
                        id
                        url
                      }
                      images(first: 10) {
                        edges {
                          node {
                            url
                            id
                          }
                        }
                      }
                      options {
                        id
                        name
                        values
                      }
                      variants(first: 25) {
                        nodes {
                          id
                          image {
                            id
                            url
                          }
                           product{
                            title
                            description
                          }
                          selectedOptions{
                            name
                            value
                          }
                          title
                          quantityAvailable
                          priceV2 {
                            amount
                            currencyCode
                          }
                        }
                      }
                    }
                  }
                  `;

  const variables = {
    handle,
  };

  const res = await shopifyData(query, variables);
  return res.data.product;
};

export const getAllProducts = async () => {
  const query = `
        {
          products(first: 25) {
            edges {
              node {
                id
                title
                handle
                priceRange {
                  minVariantPrice {
                    amount
                  }
                }
                images(first: 5) {
                  edges {
                    node {
                      url
                      altText
                    }
                  }
                }
              }
            }
          }
        }
    `;

  const response = await shopifyData(query);
  const products = response.data.products.edges;

  return products;
};

export const getProductById = async (id = "") => {
  const query = `
       query getProductById($id: ID!) {
          product(id: $id) {
            title
            description
            productType
            featuredImage{
              id
              url
            }
           images(first:10){
              edges{
                node{
                  url
                  id
                }
              }
            }
            options{
              id
              name
              values
            }
            variants(first: 5) {
              nodes {
                id
                image {
                  url
                }
                product{
                  title
                  description
                }
                title
                quantityAvailable
                priceV2{
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      `;

  const variables = { id };
  const res = await shopifyData(query, variables);
  return res.data.product;
};

export const getProductByTitle = async (title = "") => {
  const query = `
       query getProductByTitle($title: String!) {
          products(first: 250, query: $title) {
            edges {
              node {
                id
                priceRange{
                  minVariantPrice{
                    amount
                    currencyCode
                  }
                },
                title
                description
                productType
                handle
                featuredImage {
                  id
                  url
                }
                images(first: 10) {
                  edges {
                    node {
                      url
                      id
                    }
                  }
                }
                options {
                  id
                  name
                  values
                }
                variants(first: 5) {
                  nodes {
                    id
                    image {
                      url
                    }
                    product {
                      title
                      description
                    }
                    title
                    quantityAvailable
                    priceV2 {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      `;

  const variables = { title };
  const res = await shopifyData(query, variables);
  return res.data.products.edges;
};

export const getCollectionByHandle = async (handle = "") => {
  const query = `
        query getCollectionProp($handle: String) {
          collection(handle:$handle) {
          
                title
                description
                products(first: 25) {
                  edges {
                    node {
                      id
                      title
                      handle
                      priceRange{
                        minVariantPrice{
                          amount
                          currencyCode
                        }
                      },
                      description
                      productType
                      featuredImage {
                        url
                      }
                    }
                  }
                }
              }
            
        }
      `;

  const variables = { handle };
  const res = await shopifyData(query, variables);

  console.log(res.data.collection.products);

  return res.data.collection.products;
};

export const createCheckOut = async (variantsItems) => {
  const lineItemsObject = variantsItems.map((item) => {
    return `{
      variantId: "${item.variantId}",
      quantity: ${item.quantity}
    }`;
  });

  const query = `
      mutation{
          checkoutCreate(input: {
          lineItems: [${lineItemsObject}]
        }) {
            checkout {
              id
              webUrl
              lineItems(first: 5) {
                edges {
                  node {
                    title
                    quantity
                  }
                }
              }
            }
          }
        } 
      
  `;

  const res = await shopifyData(query);

  return res.data.checkoutCreate.checkout
    ? res.data.checkoutCreate.checkout
    : [];
};

export const getAllCollections = async () => {
  const query = `
    {
      collections(first: 250){
        edges{
          node{
            id
            title
            handle
            image{
              id
              url
            }
          }
        }
      }
    }
  `;

  const res = await shopifyData(query);

  return res.data.collections.edges ?? [];
};
