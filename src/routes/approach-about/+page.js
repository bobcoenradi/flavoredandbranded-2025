import { getAllAboutItem } from '$lib/sanity';

export const load = async ({ params }) => {
  const about = await getAllAboutItem();
  return {
    items: about,
  };
};
