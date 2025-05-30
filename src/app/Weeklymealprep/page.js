import FeatureImage from "../components/FeatureImage";
import DishesSection from "../components/weeklymealprep/addons";
import WeeklyMealPrepBenefits from "../components/weeklymealprep/benefits";
import Cost from "../components/weeklymealprep/cost";
import WeeklyMealPrepHowItWorks from "../components/weeklymealprep/howitwork";
import GallerySection from "../components/weeklymealprep/ourgallery-meal";
import SampleMenu from "../components/weeklymealprep/samplemenu";

export default function Weeklymealprep() {
    return (
        <div>
           <FeatureImage/>
           <GallerySection/>
           <DishesSection/>
           <Cost/>
           <WeeklyMealPrepHowItWorks/>
           <WeeklyMealPrepBenefits/>
           <SampleMenu/>
        </div>
    );
}


