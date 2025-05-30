import BenefitsSection from "../components/dinner-parties/BenefitsSection";
import DinnerPartyTabs from "../components/dinner-parties/DinnerPartyTabs";
import PricingSection from "../components/dinner-parties/PricingSection";
import FeatureImage from "../components/FeatureImage";

export default async function Singledish() {
    return (
        <div>
           <FeatureImage/>
           <BenefitsSection/>
           <PricingSection/>
           <DinnerPartyTabs/>
        </div>
    );
}
