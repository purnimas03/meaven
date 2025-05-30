import BenefitsSection from "../components/careers-component/BenefitsSection";
import CareerForm from "../components/careers-component/Carrerform";
import OurChefs from "../components/careers-component/ourchefs";
import RequirementsSection from "../components/careers-component/requiresec";
import FeatureImage from "../components/FeatureImage";

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function Careers() {
    await wait(2000);
    return (
        <div>
           <FeatureImage/>
           <OurChefs/>
           <BenefitsSection/>
           <RequirementsSection/>
           <CareerForm/>
        </div>
    );
}
