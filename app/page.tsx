import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Games from "./components/Games";
import Forex from "./components/Forex";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollFade from "./components/ScrollFade";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* top progress bar */}
      <ScrollProgress />

      {/* hero */}
      <Hero />

      {/* sections */}
      <ScrollFade>
        <About />
      </ScrollFade>

      <ScrollFade>
        <Projects />
      </ScrollFade>

      <ScrollFade>
        <Skills />
      </ScrollFade>

      <ScrollFade>
        <Games />
      </ScrollFade>

      <ScrollFade>
        <Forex />
      </ScrollFade>

      <ScrollFade>
        <Contact />
      </ScrollFade>

      {/* footer */}
      <Footer />
    </main>
  );
}