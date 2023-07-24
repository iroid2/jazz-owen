import CategoryTour from "./CategoryTour";

export default function CategoryTours({ data }) {
  return (
    <section className="section-category-tours">
      <div className="heading-details v-center ">
        <h2 className="section-heading-lg ">Choose your settings with care</h2>
        <p className="tagline">
          Each location features offerings in economy, comfort, and luxury
          tiers.
        </p>
      </div>
      <div className="component-cards">
        {data.map((category) => (
          <CategoryTour
            key={category.id}
            imageSrc={category.image}
            title={category.title}
            slug={category.slug}
          />
        ))}
      </div>
    </section>
  );
}
