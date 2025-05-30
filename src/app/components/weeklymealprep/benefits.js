"use client";

import { useState , useEffect } from "react";
import { fetchFromAPI } from "../../../../lib/fetchapi";
import Image from "next/image";

const WeeklyMealPrepBenefits = () => {

  const [weaklyPrepBenefits , setBenefits] = useState([]);
  
    useEffect(() => {
      async function loadBenefits() {
        const weaklyPoints = await fetchFromAPI('/wp/v2/pages?slug=weakly-meal-prep-page');
  
        if (Array.isArray(weaklyPoints) && weaklyPoints.length > 0) {
          const benefits = weaklyPoints[0]?.acf?.benefits_section;
          setBenefits(benefits);
          console.log(benefits);
        }
      }
  
      loadBenefits();
    }, []);

  return (
    <section className="py-24 max-ssm:py-16 pb-32 benefits benefits-wrapper benefits-latest max-xxl:pb-24 bg-[#178b77]">
      <div className="container">
        <div className="grid grid-cols-2 max-mmmd:grid-cols-1 gap-y-11 max-xxl:items-start gap-x-24">
            <div className="relative images-wrap transnitone-anim before:transnitone-anim hover:before:-translate-y-3   before:absolute max-mmmd:before:-bottom-7 max-mmmd:before:-right-2 before:-bottom-[50px] before:-right-10  before:bg-no-repeat before:bg-contain before:w-[121px] max-mmmd:before:w-[100px] before:z-50 max-mmmd:before:h-[100px] before:h-[121px] bg-lemonpic  max-ssm:before:w-[70px] max-ssm:before:h-[70px]">
                {weaklyPrepBenefits?.image && (
                <Image
                    src={weaklyPrepBenefits.image.url}
                    alt={weaklyPrepBenefits.image.alt}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover rounded-tr-[50px]"
                />
                )}
            </div>
            <div>
                <h3 className="text-[50px] max-sxl:text-4xl text-white mb-5  font-source-serif-prolight">
                {weaklyPrepBenefits.title}
                </h3>
                <div className="text-white description font-human_sanslight" dangerouslySetInnerHTML={{ __html: weaklyPrepBenefits.content || '' }}>
                </div>
            </div>
        </div>
      </div>  
    </section>
  );
};

export default WeeklyMealPrepBenefits;
