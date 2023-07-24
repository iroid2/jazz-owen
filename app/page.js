import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Tours from "@/components/Tours";
import FeaturedTours from "@/components/FeaturedTours";
import CategoryTours from "@/components/CategoryTours";
import OverlappingImage from "@/components/OverlappingImage";
import Guides from "@/components/Guides";
import { getTours } from "./lib/getTours";
import getCategories from "./lib/getCategories";

export default async function Home() {
  const tours = await getTours();
  const categories = await getCategories();
  // console.log(categories);
  
 
 
  return (
    <main>
      {/* <Navbar /> */}
      <Hero />
      <OverlappingImage />
      <Tours data={tours.data} />
      <Guides />
      <FeaturedTours data={tours.data} />
      <CategoryTours data={categories} />
    </main>
  );
}
