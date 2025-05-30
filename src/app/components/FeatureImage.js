'use client'; 

import React from 'react';

const FeatureImage = () => {
  return (
    <section className="featureimage-wrap">
      <div
        className="mx-auto px-4 bg-no-repeat relative feature-img bg-center bg-cover h-[350px] max-mmd:h-[300px] flex justify-center items-center after:absolute after:w-full after:top-0 after:left-0 after:bottom-0 after:right-0 after:bg-[rgba(0,0,0,0.4)] after:h-full"
        style={{ backgroundImage: "url('/3-3.jpg')" }}
      >
        <div className="text-center z-50">
          <h2 className="text-white text-[70px]  font-source-serif-proregular max-xxl:text-6xl max-mmd:text-5xl max-ssm:text-4xl">
            
          </h2>
        </div>
      </div>
    </section>
  );
};

export default FeatureImage;
