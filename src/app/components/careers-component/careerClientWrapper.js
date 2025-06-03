"use client";
import BenefitsSection from "./BenefitsSection";
import CareerForm from "./Carrerform";
import OurChefs from "./ourchefs";
import RequirementsSection from "./requiresec";
import FeatureImage from "../FeatureImage";
import { fetchFromAPI } from '../../../../lib/fetchapi';
import { useEffect, useState } from "react";
import ImageLoader from "../ImageLoader";

export default function Careers() {
    const [loading, setLoading] = useState(true);
    const [benefitSec , setAcfFields] = useState([]);
    const [careerChefSec, setAcfChefFields] = useState([]);
    const [list, setRequirementsFields] = useState([]);

    useEffect(() => {
    async function loadData() {
        const list = await fetchFromAPI('/wp/v2/pages?slug=career');
        if (Array.isArray(list) && list.length > 0) {
            const page = list[0];
            setAcfFields(page?.acf?.benefits_section);
            setAcfChefFields(page?.acf?.join_the_culinary_revolution_section);
            setRequirementsFields(page?.acf?.requirements);
             setLoading(false);
        }
    }
    loadData();
    }, []);
    if (loading) return <ImageLoader />;
    return (
        <div>
           <FeatureImage/>
           <OurChefs careerChefSec={careerChefSec}/>
           <BenefitsSection benefitSec={benefitSec} />
           <RequirementsSection list={list} />
           <CareerForm/>
        </div>
    );
}
