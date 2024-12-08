import HomeSection from "@/components/HeroSection";
import ComponyLogos from "@/components/ComponyLogos"
import FeaturedProducts from "@/components/FeaturedProducts";
import TopCategories from "@/components/TopCategories";
import Categories from "@/components/Categories";
import OurProducts from "@/components/OurProducts";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <ComponyLogos />
      <FeaturedProducts />
      <TopCategories />
      <Categories />
      <OurProducts />
      
    </div>
  );
}
