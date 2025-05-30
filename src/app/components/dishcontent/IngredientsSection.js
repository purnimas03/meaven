"use client";
import React from "react";

const IngredientsSection = () => {
  return (
    <section className="py-24 ssm:py-16 bg-[#ebebe6]">
      <div className="container">
        <div>
          <h3 className="text-6xl pb-10 max-2xl:text-4xl max-sxx:text-center text-black font-source_serif_prolight">
          
          </h3>
          <div className="mb-6  font-human-sanslight text-xl max-ssm:text-base text-black">
           
          </div>
          <div>
            <div className="grid grid-cols-2 max-ssm:grid-cols-1 pt-10 max-ssm:pt-6 gap-x-8 gap-y-4">
              {[
                { name: "Ground Beef", amount: "227g" },
                { name: "Jasmine Rice", amount: "3/4 cup" },
                { name: "Shanghai Bok Choy", amount: "2 unit(s)" },
                { name: "Carrot", amount: "1 unit(s)" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 max-w-[540px] gap-x-28 max-ssm:gap-x-16 border-b border-[#cccccc] pb-6 mb-6 last:mb-0 max-ssm:pb-4 max-ssm:mb-4"
                >
                  <span className=" font-human-sanslight text-xl max-ssm:text-base text-black">
                    {item.name}
                  </span>
                  <span className=" font-human-sanslight text-xl max-ssm:text-base text-black">
                    {item.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
