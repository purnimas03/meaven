"use client";
import { useState, useEffect } from "react";
import { fetchFromAPI } from "../../../../lib/fetchapi";
import FeatureImage from "../FeatureImage";
import DishesSection from "./addons";
import WeeklyMealPrepBenefits from "./benefits";
import Cost from "./cost";
import WeeklyMealPrepHowItWorks from "./howitwork";
import GallerySection from "./ourgallery-meal";
import SampleMenu from "./samplemenu";
import ImageLoader from "../ImageLoader";


export default function Weeklymealprep() {
    const [loading, setLoading] = useState(true);
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

            setLoading(false);
        }
    
        loadAllData();
      }, []);
      if (loading) return <ImageLoader />;
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


