'use client';

import { LoadingProvider, useLoading } from '../../../context/loadingcontext';
import Banner from './home/Banner';
import MissionSection from './home/Misson';
import BookingSection from './home/BookingSection';
import WeeklyMealPrep from './home/Weeklysilder';
import OurChefs from './home/OurChefs';
import FAQAccordion from './home/Faq';
import WatchUsInAction from './home/Watchusaction';
import ImageLoader from './ImageLoader';

function InnerContent() {
  const { loading } = useLoading();

  if (loading) return <ImageLoader />;

  return (
    <>
      <Banner />
      <MissionSection />
      <BookingSection />
      <WeeklyMealPrep />
      <OurChefs />
      <FAQAccordion />
      <WatchUsInAction />
    </>
  );
}

export default function HomeClientWrapper() {
  return (
    <LoadingProvider totalComponents={6}>
      <InnerContent />
    </LoadingProvider>
  );
}
