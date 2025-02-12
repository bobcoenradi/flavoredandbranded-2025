import { getAllPortfolioItems } from '$lib/sanity';

export const load = async ({ params }) => {
  const portfolioitems = await getAllPortfolioItems();
  return {
    items: portfolioitems,
  };
};
