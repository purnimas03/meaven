import React from 'react';

const PricingSection = ({pricingFields = [] }) => {
  return (
    <section className="py-24 max-ssm:py-16 bg-[#3a3a3a]">
      <div className="container">
        <h3 className="text-[50px] text-center max-sxl:text-4xl text-white mb-5  font-source-serif-prolight">
          Pricing
        </h3>
        <div className="grid pt-7 max-w-[1200px] mx-auto grid-cols-3 max-mmd:grid-cols-2 max-ssm:grid-cols-1 gap-6">
          {pricingFields?.map((field , index) => (
          <div key={index} className="bg-white transnitone-anim group hover:bg-[#178c78] hover:before:bg-[#ffedd6] before:transnitone-anim py-16 px-8 before:absolute before:top-0 before:left-0 before:h-3 before:w-full first:before:bg-[#178c78] last:before:bg-black before:bg-[#ffdb00] relative flex flex-col justify-between">
            <div className="text-center">
              <h4 className="text-black  max-mmd:text-7xl group-hover:text-white leading-[100px] transnitone-anim  font-source-serif-prolight text-[87px]">
                {field.dollars}
              </h4>
              <h5 className="text-black text-3xl group-hover:text-white  font-source-serif-prolight transnitone-anim">
                {field.title}
              </h5>
              <p className="text-black max-w-72 group-hover:text-white mx-auto mt-7 text-lg  font-human-sanslight transnitone-anim">
                {field.description}
              </p>
            </div>
          </div>
          ) )}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
