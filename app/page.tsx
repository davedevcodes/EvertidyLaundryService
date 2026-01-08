import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen max-w-screen overflow-hidden bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
