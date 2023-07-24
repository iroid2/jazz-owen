import Image from "next/image";
import Tour from "./Tour";
import { toursArray } from "@/toursArray";

export default function Tours({ data }) {
  return (
    <section className="tour-section">
      <div className="heading-details v-center">
        <h2 className="section-heading-lg ">Best Safari Tours</h2>
        <p className="tagline">We make your tour unforgettable</p>
      </div>
      <div className="tours-container">
        {data?.map((tour) => (
          <Tour key={tour.id} data={tour} />
        ))}
      </div>
    </section>
  );
}
