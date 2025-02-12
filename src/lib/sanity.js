import { createClient } from '@sanity/client';
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';

import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

export const client = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2024-02-02', // date of setup
});

const builder = imageUrlBuilder(client);

const getAllPortfolioItem = async (slug) => {
  return await client.fetch(groq`*[_type == "portfolio" && slug.current == $slug][0]`, {
    slug,
  });
};

const getAllPortfolioItems = async () => {
  return await client.fetch(groq`*[_type == "portfolio"] | order(order asc)`);
};

const getAllAboutItem = async () => {
  return await client.fetch(groq`*[_type == "author"][0]`);
};

const getHome = async () => {
  return await client.fetch(groq`*[_type == "home"][0]`);
};

const urlFor = (source) => {
  return builder.image(source);
};

export { getAllPortfolioItems, builder, getAllPortfolioItem, urlFor, getAllAboutItem, getHome };
