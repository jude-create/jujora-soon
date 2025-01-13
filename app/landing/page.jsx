import Navbar from "./components/navbar";
import HeroSection from "./components/hero_section";
import VideoSection from "./components/video_section";
import AboutUs from "./components/about_us";
import Testimonials from "./components/testimonials";
import ChooseUs from "./components/choose_us";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";

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
