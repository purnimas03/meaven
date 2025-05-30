import FeatureImage from "../components/FeatureImage";
import AthleticIconBoxes from "../components/maeven-athletics/AthleticIconBoxes";
import AthleticLogosSection from "../components/maeven-athletics/AthleticLogosSection";
import AthleticsApproachSection from "../components/maeven-athletics/AthleticsApproachSection";
import AthleticHowItWorks from "../components/maeven-athletics/AthleticsHowItWorks";

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function Maevenathletics() {
    await wait(2000);
    return (
        <div>
            <FeatureImage/>
            <AthleticIconBoxes/>
            <AthleticsApproachSection/>
            <AthleticHowItWorks/>
            <AthleticLogosSection/>
        </div>
    );
}
