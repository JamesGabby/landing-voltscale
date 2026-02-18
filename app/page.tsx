import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Guarantee from "./components/Guarantee";
import Scorecard from "./components/Scorecard";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <Process />
        <Guarantee />
        <Scorecard />
        <CTA />
      </main>
      <Footer />
    </>
  );
}