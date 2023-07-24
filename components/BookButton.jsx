import Link from "next/link";

export default function BookButton({ btnType, title, href }) {
  return (
    <Link
      href={href}
      className={btnType == "outline" ? "book-btn outline" : "book-btn solid"}
    >
      {title}
    </Link>
  );
}
