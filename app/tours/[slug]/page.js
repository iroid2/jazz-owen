import { getTours } from "@/app/lib/getTours";
import Accordion from "@/components/Accordion";
import BookingForm from "@/components/BookingForm";
import Gallery from "@/components/Gallery";
import Image from "next/image";
import { FiShare } from "react-icons/fi";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { slug } = params;
  // fetch data
  const tours = await getTours();
  const tour = tours.data?.find((tour) => tour.slug == slug);

  return {
    title: tour.title,
    description: tour.overview,
    alternates: {
      canonical: `/tours/${tour.slug}`,
    },
  };
}
export default async function Page({ params: { slug } }) {
  const tours = await getTours();
  const tour = tours.data?.find((tour) => tour.slug == slug);
  return (
    <section className="tour-detail-page">
      <div className="breadcrumb">breadcrumb here</div>
      <div className="tour-header">
        <h2>{tour.title.toLowerCase()} </h2>
        <button className="shareBtn" title="Share">
          <FiShare className="icon" />
        </button>
      </div>
      <div className="tour-details">
        <div className="carousel">
          <Gallery images={tour.images} title={tour.title} />
        </div>
        <div className="booking-form">
          <BookingForm />
        </div>
      </div>
      <div className="tour-summary">
        <h2>Tour Overview</h2>
        <p className="overview-details">{tour.overview}</p>
        <h2>Tour Places</h2>
        <ul className="tour-places">
          {tour.tourPlaces.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </div>
      <div className="tour-days">
        <h2>Days </h2>
        {tour.days.map((day, i) => {
          return <Accordion data={day} key={i} />;
        })}
      </div>
    </section>
  );
}
