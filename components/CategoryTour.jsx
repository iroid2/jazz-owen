import Image from "next/image";
import Link from "next/link";

export default function CategoryTour({ imageSrc, title,slug }) {
  return (
    <Link className="all-links" href={`/categories/${slug}`}>
      <div className="card">
        <div className="card-image">
          <Image src={imageSrc} fill alt={title} />
        </div>
        <div className="card-content">
          <h3>{title}</h3>
        </div>
      </div>
      </Link>

  );
}
