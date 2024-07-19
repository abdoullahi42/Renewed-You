import PageHero from "../component/PageHero";
import Stats from "../component/Stats";
import SteptoStart from "../component/SteptoStart";
import TherapyComparison from "../component/TheraphyComparison";
import Reviews from "./Reviews";

import Faqs from "../component/Faqs";

function Homes() {
  return (
    <>
      <PageHero />
      <Stats />
      <SteptoStart />
      <TherapyComparison />
      <Reviews />
      <Faqs />
    </>
  );
}

export default Homes;
