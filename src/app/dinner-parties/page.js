import BenefitsSection from "../components/dinner-parties/BenefitsSection";
import DinnerPartyTabs from "../components/dinner-parties/DinnerPartyTabs";
import PricingSection from "../components/dinner-parties/PricingSection";
import FeatureImage from "../components/FeatureImage";

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function Singledish() {
    await wait(2000);
    return (
        <div>
           <FeatureImage/>
           <BenefitsSection/>
           <PricingSection/>
           <DinnerPartyTabs/>
        </div>
    );
}
