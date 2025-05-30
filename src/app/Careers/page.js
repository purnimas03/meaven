import BenefitsSection from "../components/careers-component/BenefitsSection";
import CareerForm from "../components/careers-component/Carrerform";
import OurChefs from "../components/careers-component/ourchefs";
import RequirementsSection from "../components/careers-component/requiresec";
import FeatureImage from "../components/FeatureImage";

export default async function Careers() {
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
