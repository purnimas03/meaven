"use client"
import WatchUsInAction from "./Watchusaction";
import Banner from "./Banner";
import WeeklyMealPrep from "./Weeklysilder";
import FAQAccordion from "./Faq";
import MissionSection from "./Misson";
import BookingSection from "./BookingSection";
import OurChefs from "./OurChefs";
import { fetchFromAPI } from "../../../../lib/fetchapi";



export default async  function Home() {
  const [slides, setSlides] = useState([]);
  const [acfFields, setAcfFields] = useState(null);
  const [fetchedFaqs, setFetchedFaqs] = useState([]);
  const [missionFields, setMissionFields] = useState(null);
  const [videos, fetchVideos] = useState([]);
  const [slidesWeaklyMeal, setWeaklySlides] = useState([]);
  const [checfList, fetchChefs] = useState([]);
  const [chefAcf, setchefAcfFields] = useState([]);


  useEffect(() => {
    async function loadBanner() {
      const data = await fetchFromAPI('/custom/v1/banner');
      setSlides(data);
    }
    loadBanner();

    async function loadHomePageData() {
      const section = await fetchFromAPI('/wp/v2/pages?slug=home');
      if (Array.isArray(section) && section.length > 0) {
        const page = section[0];
        setAcfFields(page?.acf?.text_and_image_section);
        setFetchedFaqs(page?.acf?.faq_section);
        setMissionFields(page?.acf?.mission);
        fetchVideos(page?.acf?.video_section);
        setchefAcfFields(page?.acf?.chef_section);
        
      }
    }
    loadHomePageData();

    async function loadWeaklyBanner() {
      const data = await fetchFromAPI('/custom/v1/weakly-meal-prep');
      setWeaklySlides(data);
    }
    loadWeaklyBanner();

    async function loadChefList() {
      const list = await fetchFromAPI('/custom/v1/our-chefs');
      fetchChefs(list);
    }
    loadChefList();
  }, []);

  if (!acfFields) return null;



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

