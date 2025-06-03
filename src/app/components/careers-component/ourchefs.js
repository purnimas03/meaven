import React from "react";
import Image from "next/image";


const OurChefs = ({ careerChefSec = [] }) => {
  return (
    <section className="py-24 max-ssm:py-16 pb-32 max-xxl:pb-24">
      <div className="container">
        <div className="grid grid-cols-2 max-sxx:grid-cols-1 gap-y-11 items-center gap-x-24 max-xxxl:gap-x-16">
          <div className="grid grid-cols-2 ourchefs-images gap-4">
           {careerChefSec?.chef_images?.map((chef, index) => (
              <Image
                key={index}
                alt={chef?.upload?.alt || `Chef Image ${index + 1}`}
                src={chef?.upload?.url || chef?.upload?.source_url || ""}
                width={338}
                height={336}
                className="w-full rounded-xl transition-anim object-cover"
              />
            ))}
          </div>
          <div>
            <h3 className="text-[50px] max-sxl:text-4xl text-black mb-5  font-source-serif-prolight">
                {careerChefSec.heading}
            </h3>
            <div className="description text-lg max-ssm:text-base text-black  font-human-sanslight">
                {careerChefSec.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurChefs;
