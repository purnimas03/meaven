"use client";
import { useState, useEffect } from "react";
import { fetchFromAPI } from "../../../../lib/fetchapi";
import FeatureImage from "../components/FeatureImage";
import DishesSection from "../components/weeklymealprep/addons";
import WeeklyMealPrepBenefits from "../components/weeklymealprep/benefits";
import Cost from "../components/weeklymealprep/cost";
import WeeklyMealPrepHowItWorks from "../components/weeklymealprep/howitwork";
import GallerySection from "../components/weeklymealprep/ourgallery-meal";
import SampleMenu from "../components/weeklymealprep/samplemenu";

export default function Weeklymealprep() {
    const [dishesData, setDishesData] = useState([]);
    const [weaklyPrepBenefits , setBenefits] = useState([]);
    const [cost, setCost] = useState([]);
    const [howitwork, setHowItWork] = useState([]);
    const [menulist, fetchMenu] = useState([]);
    const [galleryData , setGalleryData] = useState([]);

    useEffect(() => {
        async function loadAllData() {
            const [dishesData , sectionData , menulist , gallery] = await Promise.all([
                fetchFromAPI('/custom/v1/weakly-meal-prep'),
                fetchFromAPI('/wp/v2/pages?slug=weakly-meal-prep-page'),
                fetchFromAPI('/custom/v1/sample-menu'),
                fetchFromAPI('/custom/v1/our-gallery')
            ]);

            setDishesData(dishesData);
            fetchMenu(menulist);
            const formattedGallery = gallery.map((item) => {
            // Case: video type
            if (item.video?.video_url) {
                return {
                id: item.id,
                type: "video",
                videoUrl: item.video.video_url,
                thumbnail: item.video.thumbnail?.url || "/default-video-thumb.jpg", // fallback thumbnail
                };
            }

            // Case: gallery of images
            if (item.gallery && Array.isArray(item.gallery)) {
                const images = item.gallery.map((g, idx) => ({
                url: g.images?.url || "/default-img.jpg",
                title: g.images?.title || `Image ${idx + 1}`,
                }));

                return {
                id: item.id,
                type: "images",
                images,
                };
            }

            return null; 
            }).filter(Boolean);
            setGalleryData(formattedGallery);
                
            if (Array.isArray(sectionData) && sectionData.length > 0) {
                const page = sectionData[0];
                setBenefits(page?.acf?.benefits_section);
                setCost(page?.acf?.cost_section);
                setHowItWork(page?.acf?.how_it_works_section);
            }
        }
    
        loadAllData();
      }, []);
    return (
        <div>
           <FeatureImage/>
           <GallerySection galleryData={galleryData}/>
           <DishesSection dishesData={dishesData}/>
           <Cost cost={cost} />
           <WeeklyMealPrepHowItWorks howitwork={howitwork} />
           <WeeklyMealPrepBenefits weaklyPrepBenefits={weaklyPrepBenefits}/>
           <SampleMenu menulist={menulist} />
        </div>
    );
}


