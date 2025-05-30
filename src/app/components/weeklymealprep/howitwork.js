"use client";

import { useState , useEffect } from "react";
import { fetchFromAPI } from "../../../../lib/fetchapi";

const WeeklyMealPrepHowItWorks = () => {
  const [howitwork, setHowItWork] = useState([]);

  useEffect(() => {
    async function loadPoints() {
      const howItWorkPoints = await fetchFromAPI('/wp/v2/pages?slug=weakly-meal-prep-page');

      if (Array.isArray(howItWorkPoints) && howItWorkPoints.length > 0) {
        const points = howItWorkPoints[0]?.acf?.how_it_works_section;
        setHowItWork(points);
        console.log(points);
      }
    }

    loadPoints();
  }, []);

  return (
    <section className="py-24 max-ssm:py-16">
      <div className="container">
        <div className="text-center">
          <h3 className="text-[50px] max-sxl:text-4xl text-black mb-8  font-source-serif-prolight">
            heading
          </h3>
        </div>
        <div className="grid mt-12 max-ssm:mt-14 grid-cols-4 max-ssm:grid-cols-1 max-sxl:grid-cols-3 gap-y-16 max-mmmd:grid-cols-2 gap-x-6">
          {howitwork?.map((content, index) => (
            <div
              key={index}
              className="relative transnitone-anim group bg-[#ebebe5] hover:bg-[#3a3a3a] p-9 text-center max-w-sm mx-auto"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 transnitone-anim -translate-y-1/2 bg-black max-mmmd:w-14 max-mmmd:h-14 group-hover:bg-[#fedb00] rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-white  font-human-sansregular transnitone-anim max-mmmd:text-3xl group-hover:text-black text-4xl">
                  {index + 1}
                </span>
              </div>
              <p
                className="text-lg pt-10 text-black  font-human-sanslight group-hover:text-white transnitone-anim mmmd:pt-8"
                dangerouslySetInnerHTML={{ __html: content.points }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeeklyMealPrepHowItWorks;
