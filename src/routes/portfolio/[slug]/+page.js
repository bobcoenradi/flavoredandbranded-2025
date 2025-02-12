import { getAllPortfolioItem, getAllPortfolioItems } from '$lib/sanity';

export const load = async ({ params }) => {
  const portfolioItem = await getAllPortfolioItem(params.slug);
  const allPortfolioItems = await getAllPortfolioItems();

  return {
    items: portfolioItem,
    allItems: allPortfolioItems,
  };
};
