import AboutUs from "./components/AboutUs";
import BlogSection from "./components/BlogSection";
import BookingNow from "./components/BookingNow";
import HeroSection from "./components/HeroSection";
import InstagramGrid from "./components/InstagramGrid";
import MainFooter from "./components/MainFooter";
import ProductsArea from "./components/ProductsArea";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Navbar from "./components/shared/navbar/Navbar";
import Working from "./components/Working";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <BookingNow />
      <ProductsArea />
      <Working />
      <Reviews />
      <BlogSection />
      <InstagramGrid />
      <MainFooter />
    </>
  );
}
