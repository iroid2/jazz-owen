import Image from "next/image";
import FeaturedTour from "./FeaturedTour";
import { tourPackages } from "@/data";

export default function FeaturedTours({ data }) {
  const featuredPackages = data.filter(
    (tourPackage) => tourPackage.isFeatured == true
  );
  return (
    <>
      <div className="heading-details v-center padded">
        <h2 className="section-heading-lg ">Your adventure begins with Us</h2>
        <p className="tagline">
          Striking landscapes and unforgettable Wildlife of africa. Come Join us
          on this life changing adventure
        </p>
      </div>
      {featuredPackages?.map((featuredPackage) => {
        return <FeaturedTour key={featuredPackage.id} data={featuredPackage} />;
      })}
    </>
  );
}
