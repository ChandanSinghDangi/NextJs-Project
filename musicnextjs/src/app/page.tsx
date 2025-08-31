import FeaturedCourse from "@/components/FeaturedCourse";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonial from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from '@/components/Footer';

export default function Home() {

  return (

    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        {/* <h1 className="text-2xl text-center">Chai aur Code || Home Page</h1> */}
        <HeroSection />
        <FeaturedCourse />
        <WhyChooseUs />
        <MusicSchoolTestimonial />
        <UpcomingWebinars />
        <Instructors />
        <Footer />
      </main>
    </>
  );
}



