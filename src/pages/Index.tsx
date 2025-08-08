import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
