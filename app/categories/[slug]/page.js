import getCategories from "@/app/lib/getCategories";
import { getTours } from "@/app/lib/getTours";
import Tour from "@/components/Tour";

export default async function Category({ params: { slug } }) {
  const categories = await getCategories();

  const category = categories?.find((category) => category.slug == slug);
  const tours = await getTours();
  const id = category.id;
  const filteredTours = tours.data?.filter((tour) => tour.cat_id == id);
  console.log(filteredTours);
  return (
    <section className="tour-section">
      <div className="heading-details v-center">
        <h2 className="section-heading-lg ">{category.title}</h2>
        <p className="tagline">We make your tour unforgettable</p>
      </div>
      {filteredTours.length == 0 ? (
        <div className="v-center mt-3">No Tours in this Category</div>
      ) : (
        <div className="tours-container">
          {filteredTours?.map((tour) => (
            <Tour key={tour.id} data={tour} />
          ))}
        </div>
      )}
    </section>
  );
}
