import Hero from "@/components/Hero";
import Converter from '@/components/Converter';
import Features from "@/components/Features";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Newsletter from "@/components/Newsletter";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq"

export default function Home() {
  return (
   <main>
      <Hero />
      <Converter />
      {/* <Features /> */}
      <Services />
      {/* <Gallery /> */}
      {/* <Reviews /> */}
      <Faq />
      <Newsletter />
   </main>
  );
}
