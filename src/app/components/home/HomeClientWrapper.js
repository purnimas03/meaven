"use client"
import WatchUsInAction from "./Watchusaction";
import Banner from "./Banner";
import WeeklyMealPrep from "./Weeklysilder";
import FAQAccordion from "./Faq";
import MissionSection from "./Misson";
import BookingSection from "./BookingSection";
import OurChefs from "./OurChefs";
import { fetchFromAPI } from "../../../../lib/fetchapi";
import { useEffect, useState } from 'react';
import ImageLoader from "../ImageLoader";




export default function Home() {
  const [loading, setLoading] = useState(true);
  const [slides, setSlides] = useState([]);
  const [acfFields, setAcfFields] = useState(null);
  const [fetchedFaqs, setFetchedFaqs] = useState([]);
  const [missionFields, setMissionFields] = useState(null);
  const [videos, fetchVideos] = useState([]);
  const [slidesWeaklyMeal, setWeaklySlides] = useState([]);
  const [checfList, fetchChefs] = useState([]);
  const [chefAcf, setchefAcfFields] = useState([]);


  useEffect(() => {
    async function loadAllHomePageData() {
      try {
        const [
          bannerData,
          homePageData,
          weeklyMealPrepData,
          chefListData,
        ] = await Promise.all([
          fetchFromAPI("/custom/v1/banner"),
          fetchFromAPI("/wp/v2/pages?slug=home"),
          fetchFromAPI("/custom/v1/weakly-meal-prep"),
          fetchFromAPI("/custom/v1/our-chefs"),
        ]);

        setSlides(bannerData);
        setWeaklySlides(weeklyMealPrepData);
       fetchChefs(chefListData);

        if (Array.isArray(homePageData) && homePageData.length > 0) {
          const page = homePageData[0];
          setAcfFields(page?.acf?.text_and_image_section);
          setFetchedFaqs(page?.acf?.faq_section);
          setMissionFields(page?.acf?.mission);
          fetchVideos(page?.acf?.video_section);
          setchefAcfFields(page?.acf?.chef_section);
        }
      } catch (error) {
        console.error("Error loading homepage data:", error);
      } finally {
        setLoading(false); 
      }
    }

    loadAllHomePageData();
  }, []);

  if (loading || !acfFields) return <ImageLoader />;


  return (
    <div>
      <Banner slides={slides} />
      <MissionSection missionFields={missionFields} />
      <BookingSection acfFields = {acfFields} />
      <WeeklyMealPrep slidesWeaklyMeal = {slidesWeaklyMeal} />
      <OurChefs checfList={checfList} chefAcf={chefAcf}/>
      <FAQAccordion fetchedFaqs = {fetchedFaqs} />
      <WatchUsInAction videos = {videos}/>
    </div>
  );
}

