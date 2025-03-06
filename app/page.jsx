import Navbar from "./landing/components/navbar";
import HeroSection from "./landing/components/hero_section";
import VideoSection from "./landing/components/video_section";
import AboutUs from "./landing/components/about_us";
import Testimonials from "./landing/components/testimonials";
import ChooseUs from "./landing/components/choose_us";
import Subscribe from "./landing/components/subscribe";
import Footer from "./landing/components/footer";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <VideoSection />
      <AboutUs />
      <Testimonials/>
      <ChooseUs/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}
