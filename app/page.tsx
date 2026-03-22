import Header from "./components/Header";
import Services from "./components/Services";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Guarantee from "./components/Guarantee";
import Scorecard from "./components/Scorecard";
import CalendlyWidget from "./components/CalendlyWidget";
import FAQWithTabs from "./components/FAQWithTabs";
import HeroNoVideo from "./components/HeroNoVideo";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroNoVideo />
        <Guarantee />
        <Services />
        <Process />
        <FAQWithTabs />
        <CTA />
        <CalendlyWidget />
      </main>
      <Footer />
    </>
  );
}