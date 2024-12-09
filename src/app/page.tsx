import HomeSection from '@/components/home/HeroSection';
import ComponyLogos from '@/components/home/ComponyLogos';
import FeaturedProducts from "@/components/products/FeaturedProducts";
import TopCategories from "@/components/products/TopCategories";
import Categories from "@/components/products/Categories";
import OurProducts from "@/components/products/OurProducts";

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
