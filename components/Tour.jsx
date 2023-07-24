import Image from "next/image";
import { GrLocation } from "react-icons/gr";
import { AiOutlineCalendar } from "react-icons/ai";
import { LuContact } from "react-icons/lu";
import Link from "next/link";

export default function Tour({ data }) {
  return (
    <div className="tour">
      <div className="tour-image">
        <Image src={data.thumbnail} alt={data.title} fill />
      </div>
      <h4 className="capitalise">
        <GrLocation />
        {data.title.toLowerCase()}
      </h4>
      <div className="overview clamp-2">{data.overview}</div>
      <div className="buttons">
        <div className="cta">
          <Link href={`/tours/${data.slug}`}>Book Now</Link>
        </div>
        <Link href={`/tours/${data.slug}`} className="outline-link">
          Read more
        </Link>
      </div>
    </div>
  );
}
