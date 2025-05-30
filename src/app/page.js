import WatchUsInAction from "./components/home/Watchusaction";
import Banner from "./components/home/Banner";
import WeeklyMealPrep from "./components/home/Weeklysilder";
 import FAQAccordion from "./components/home/Faq";
import MissionSection from "./components/home/Misson";
import BookingSection from "./components/home/BookingSection";
import OurChefs from "./components/home/OurChefs";

export default async  function Home() {
  return (
    <div>
      <Banner/>
      <MissionSection/>
      <BookingSection/>
      <WeeklyMealPrep/>
      <OurChefs/>
      <FAQAccordion/>
      <WatchUsInAction/>
    </div>
  );
}




export const metadata = {
  title: "Home | My Site",
  description: "Welcome to my site!",
};
