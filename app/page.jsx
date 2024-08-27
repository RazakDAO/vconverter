import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq"

export default function Home() {
  return (
   <main>
      <Hero />
      <Features />
      <Services />
      <Gallery />
      <Reviews />
      <Faq />
   </main>
  );
}
