"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../../../../lib/fetchapi";

const BenefitsSection = () => {
    const [benefitSec , setAcfFields] = useState([]);
      useEffect(() => {
        async function loadBenefitSec() {
          const list = await fetchFromAPI('/wp/v2/pages?slug=career');
          if (Array.isArray(list) && list.length > 0) {
            const chefData = list[0]?.acf.benefits_section;
            setAcfFields(chefData);
            console.log(chefData);
          }
        }
        loadBenefitSec();
      }, []);

    return (
        <section className="py-24 bg-[#178c78] max-ssm:py-16 pb-32 max-xxl:pb-24">
            <div className="container">
                <h3 className="text-[50px] text-center max-sxl:text-4xl text-white mb-5 font-source-serif-prolight">
                    Benefits of Becoming a Meaven Chef
                </h3>
                <div className="grid pt-[40px] ssm:pt-10 grid-cols-5 gap-x-5 max-sxl:flex max-sxl:justify-center max-sxl:flex-wrap gap-y-6">
                    {benefitSec?.fields?.map((benefit, index) => (
                        <div key={index} className="bg-transparent max-mmmd:w-[48%] max-ssm:w-[80%] max-ssm:mx-auto rounded-tl-[180px] rounded-tr-[180px] hover:bg-[#3a3a3a] border border-solid hover:border-transparent border-white group pt-14 pb-[63px] ssm:py-10 px-3 transnitone-anim flex flex-col items-center text-center">
                            <Image src={benefit.icon.url} alt={benefit.icon.alt} width={100} height={100} className="transnitone-anim" />
                            <h4 className="text-white pb-5 pt-3 max-xxl:text-2xl transnitone-anim text-3xl  font-source-serif-prolight">
                                {benefit.title}
                            </h4>
                            <p className="max-ssm:text-base max-w-[350px] text-white font-human-sanslight transnitone-anim mx-auto text-xl ">
                                {benefit.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default BenefitsSection;
