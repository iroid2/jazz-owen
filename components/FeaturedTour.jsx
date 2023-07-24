import { GoPeople } from "react-icons/go";
import { BsCalendarMinus } from "react-icons/bs";
import { TiLocationArrowOutline } from "react-icons/ti";
import { SlBadge } from "react-icons/sl";

import Image from "next/image";
// import largeImage from "../public/thumbnails/african-elephants-together-nature.webp";
// import smallImage from "../public/thumbnails/guides.webp";
import Link from "next/link";
export default function FeaturedTour({ data }) {
  return (
    <section className="overlapping-container">
      <div className="left">
        <div className="heading-details">
          <h2 className="section-heading ">{data.title.toLowerCase()}</h2>
        </div>
        <div className="content">
          <p className="clamp-4">{data.overview}</p>
          <div className="grid-info">
            <div className="info-item">
              <GoPeople size={32} />2 people
            </div>
            <div className="info-item">
              <TiLocationArrowOutline size={32} />3 tours
            </div>
            <div className="info-item">
              <BsCalendarMinus size={32} />
              2-4 days
            </div>
            <div className="info-item">
              <SlBadge size={32} />
              Experienced Guide
            </div>
          </div>

          <div className="buttons">
            <div className="cta">
              <Link href="#">Book Now</Link>
            </div>
            {/* <Link href="#" className="outline-link">
              Read more
            </Link> */}
          </div>
        </div>
      </div>
      <div className="right">
        <Image
          className="large-image"
          src={data.thumbnail}
          alt={data.title}
          fill
        />
        <Image
          className="small-image"
          src={data.mainImage}
          alt={data.title}
          fill
        />
      </div>
    </section>
  );
}
