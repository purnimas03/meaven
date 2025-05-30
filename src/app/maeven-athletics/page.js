import FeatureImage from "../components/FeatureImage";
import AthleticIconBoxes from "../components/maeven-athletics/AthleticIconBoxes";
import AthleticLogosSection from "../components/maeven-athletics/AthleticLogosSection";
import AthleticsApproachSection from "../components/maeven-athletics/AthleticsApproachSection";
import AthleticHowItWorks from "../components/maeven-athletics/AthleticsHowItWorks";


export default async function Maevenathletics() {
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
