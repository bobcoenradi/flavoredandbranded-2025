import { getHome } from '$lib/sanity';

export const load = async ({ params }) => {
  const home = await getHome();
  return {
    items: home,
  };
};
