import getCategories from "./lib/getCategories";
import { getTours } from "./lib/getTours";

export default async function sitemap() {
  const baseUrl = "https://www.jazzafricaadventures.com";
  const tours = await getTours();
  const categories = await getCategories();
  const tourUrls =
    tours.data.map((tour) => {
      return {
        url: `${baseUrl}/tours/${tour.slug}`,
        lastModified: new Date(),
      };
    }) ?? [];
  const categoryUrls =
    categories.map((category) => {
      return {
        url: `${baseUrl}/categories/${category.slug}`,
        lastModified: new Date(),
      };
    }) ?? [];
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    ...tourUrls,
    ...categoryUrls,
  ];
}
