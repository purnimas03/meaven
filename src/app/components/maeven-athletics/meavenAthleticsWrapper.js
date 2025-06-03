'use client';
import React, { useEffect, useState } from 'react';
import { fetchFromAPI } from '../../../../lib/fetchapi';
import FeatureImage from "../FeatureImage";
import AthleticIconBoxes from "./AthleticIconBoxes";
import AthleticLogosSection from "./AthleticLogosSection";
import AthleticsApproachSection from "./AthleticsApproachSection";
import AthleticHowItWorks from "./AthleticsHowItWorks";
import ImageLoader from "../ImageLoader";


export default function Maevenathletics() {
    const [loading, setLoading] = useState(true);
    const [athleticIcon, setathleticIcon] = useState([]);
    const [logos, setLogos] = useState([]);
    const [athleticHowItWorks, setathleticHowItWorks] = useState([]);
    const [athleticApproach, setAthleticApproach] = useState([]);

    useEffect(() => {
      async function loadData() {
        const list = await fetchFromAPI('/wp/v2/pages?slug=maeven-athletics');
        if (Array.isArray(list) && list.length > 0) {
            const page = list[0];
            setathleticIcon(page?.acf?.athletic_icon_box_section);
            setLogos(page?.acf?.logos_section);
            setathleticHowItWorks(page?.acf?.how_it_works_section);
            setAthleticApproach(page?.acf?.our_approach_section);
        }
        setLoading(false);
      }
      loadData();
    }, []);
    if (loading) return <ImageLoader />;

    return (
        <div>
            <FeatureImage/>
            <AthleticIconBoxes athleticIcon={athleticIcon}/>
            <AthleticsApproachSection athleticApproach={athleticApproach}/>
            <AthleticHowItWorks athleticHowItWorks={athleticHowItWorks}/>
            <AthleticLogosSection logos={logos}/>
        </div>
    );
}
