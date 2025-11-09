import Hero from "@/components/Hero";
import About from "@/components/About";
import DonationCounter from "@/components/DonationCounter";
import NGOSection from "@/components/NGOSection";
import DonateSection from "@/components/DonateSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <DonationCounter />
      <NGOSection />
      <DonateSection />
      <Footer />
    </div>
  );
};

export default Index;
