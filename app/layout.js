import Link from "next/link";
import "../styles/main.scss";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
  metadataBase: new URL("https://www.jazzafricaadventures.com"),
  title: {
    default:
      "Jazz Africa Adventures - Unforgettable Tours in Uganda | Safari, Hiking, Wildlife",
    template:
      "%s | Jazz Africa Adventures - Unforgettable Tours in Uganda | Safari, Hiking, Wildlife",
  },
  description:
    "Explore Uganda's wonders with Jazz Africa Adventures. Unforgettable safaris, national parks, mountains, hiking, and chimpanzee encounters. Expert guides, personalized attention. Discover Uganda today!",
  keywords: [
    "Uganda tours",
    "Safari adventures",
    "Wildlife encounters",
    "National park tours",
    "Hiking in Uganda",
    "Mountain expeditions",
    "Chimpanzee tracking",
    "Scenic landscapes",
    "Adventure travel",
    "Cultural experiences",
    "Birdwatching tours",
    "Gorilla trekking",
    "Eco-tourism in Uganda",
    "Guided safaris",
    "Off-the-beaten-path journeys",
    "Nature photography tours",
    "Conservation initiatives",
    "Luxury camping experiences",
    "Local cuisine and traditions",
    "Expert local guides",
  ],
  authors: [{ name: "JB Web developer", url: "https://www.desishub.com" }],
  creator: "desishub",
  publisher: "desishub",
  openGraph: {
    title:
      "Jazz Africa Adventures - Unforgettable Tours in Uganda | Safari, Hiking, Wildlife",
    description:
      "Explore Uganda's wonders with Jazz Africa Adventures. Unforgettable safaris, national parks, mountains, hiking, and chimpanzee encounters. Expert guides, personalized attention. Discover Uganda today!",
    url: "https://www.jazzafricaadventures.com",
    siteName: "Jazz Africa Adventures",
    images: [
      {
        url: "https://www.jazzafricaadventures.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
    title:
      "Jazz Africa Adventures - Unforgettable Tours in Uganda | Safari, Hiking, Wildlife",
    description:
      "Explore Uganda's wonders with Jazz Africa Adventures. Unforgettable safaris, national parks, mountains, hiking, and chimpanzee encounters. Expert guides, personalized attention. Discover Uganda today!",
  },
  alternates: {
    canonical: "https://www.jazzafricaadventures.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="cta" id="fixedBookBtn">
          <Link href="#">Book Now</Link>
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
