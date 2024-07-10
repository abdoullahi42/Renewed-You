import NavBar from "../component/navBar";
import PageHero from "../component/PageHero";
import Stats from "../component/Stats";
import SteptoStart from "../component/SteptoStart";
import TherapyComparison from "../component/TheraphyComparison";
import Reviews from "./Reviews";
import Footer from "../component/Footer";
import Faqs from "../component/Faqs";

function Homes() {
  return (
    <>
      <NavBar />
      <PageHero />
      <Stats />
      <SteptoStart />
      <TherapyComparison />
      <Faqs />
      <Reviews />
      <Footer />
    </>
  );
}

export default Homes;
