import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Accomplishments from "@/components/sections/Accomplishments";
import Contact from "@/components/sections/Contact";
import LiveLeetCodeStats from "@/components/sections/LiveLeetCodeStats"; // ✅ Import

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />

        {/* ✅ Add the stats component here */}
        <LiveLeetCodeStats username="kvr_swamy" />

        <Accomplishments />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
