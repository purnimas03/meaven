"use client";
import BenefitsSection from "./BenefitsSection";
import DinnerPartyTabs from "./DinnerPartyTabs";
import PricingSection from "./PricingSection";
import FeatureImage from "../FeatureImage";
import { fetchFromAPI } from '../../../../lib/fetchapi';
import { useEffect, useState } from "react";
import ImageLoader from "../ImageLoader";


export default function Singledish() {
    const [loading, setLoading] = useState(true);
    const [benefitFields, setBenefitFields] = useState({});
    const [pricingFields, setPricingFields] = useState([]);
    const [tabberData, setTabberFields] = useState([]);

    useEffect(() => {
        async function loadAllData() {
          const Data = await fetchFromAPI('/wp/v2/pages?slug=dinner-parties');
          if (Array.isArray(Data) && Data.length > 0) {
            const page = Data[0];
            setBenefitFields(page?.acf?.right_image_with_text_section);
            setPricingFields(page?.acf?.pricing_section);
            const pricingData = page?.acf?.party_theme_tabber;
            const normalizedData = Array.isArray(pricingData)
            ? pricingData
            : pricingData && typeof pricingData === 'object'
            ? Object.values(pricingData)
            : [];
    
            setTabberFields(normalizedData);
            setLoading(false);
          }
        }
        loadAllData();
      }, []);
    if (loading) return <ImageLoader />;
    return (
        <div>
           <FeatureImage/>
           <BenefitsSection benefitFields={benefitFields}/>
           <PricingSection pricingFields={pricingFields} />
           <DinnerPartyTabs tabberData={tabberData}/>
        </div>
    );
}
