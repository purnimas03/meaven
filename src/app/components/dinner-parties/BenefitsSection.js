// components/BenefitsSection.tsx
import Image from 'next/image';
import React from 'react';


const BenefitsSection = ({benefitFields = [] }) => {
  return (
    <section className="py-24 max-ssm:py-16 pb-32 max-xxl:pb-24 benefits benefits-wrapper">   
      <div className="container">
        <div className="grid grid-cols-2 max-mmmd:grid-cols-1 gap-y-11 max-xxl:items-start gap-x-24">
          <div className="relative images-wrap ... bg-lemonpic">
            {benefitFields?.image?.url && (
              <Image 
                loading="lazy" 
                alt={benefitFields?.image?.alt || 'benefits'}
                width={650}
                height={600}
                className="h-full max-h-[650px] transnitone-anim rounded-tr-[50px] w-full object-cover" 
                src={benefitFields.image.url}
              />
            )}
          </div>

          <div>
            <h3 className="text-[50px] max-sxl:text-4xl text-black mb-5 font-source-serif-prolight">
              {benefitFields.title || 'Default Title'}
            </h3>
            <div className="description text-black font-human-sanslight">
              {benefitFields?.content && (
                <div dangerouslySetInnerHTML={{ __html: benefitFields.content }} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
