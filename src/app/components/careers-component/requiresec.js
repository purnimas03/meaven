"use client";

import { useState , useEffect } from "react";
import { fetchFromAPI } from "../../../../lib/fetchapi";

const RequirementsSection = () => {
  const [careerPageThird, setCareerPageThird] = useState({
    title: "Requirements",
  });

  const [list, setRequirementsFields] = useState([]);
  useEffect(() => {
    async function loadChefAcf() {
      const requirement = await fetchFromAPI('/wp/v2/pages?slug=career');
      if (Array.isArray(requirement) && requirement.length > 0) {
        const chefData = requirement[0]?.acf?.requirements;
        setRequirementsFields(chefData);
      }
    }
    loadChefAcf();
  }, []);

  const careerRequirements = [
    { title: "Culinary Expertise", description: "Proficiency in cooking a variety of cuisines (vegetarian, non-vegetarian, vegan, gluten-free, etc.)" },
    { title: "Food Safety Certification", description: "Valid food safety certification (e.g., FSSAI)" },
    { title: "Culinary Expertise", description: "Ability to provide your own cooking equipment and ingredients" },
    { title: "Communication Skills", description: "Excellent communication and interpersonal skills" },
    { title: "Reliability", description: "Punctuality and commitment to client satisfaction" },
  ];

  return (
    <section className="py-24 bg-[#ffedd6] max-ssm:py-16 pb-32 max-xxl:pb-24">
      <div className="container">
        <h3 className="text-[50px] text-center max-sxl:text-4xl text-black mb-5  font-source-serif-prolight">
          {careerPageThird.title}
        </h3>
        <div className="border mt-14 border-solid px-5 border-[#3a3a3a] rounded-[90px] max-ssm:rounded-[50px] py-[70px]">
          <div className="max-w-[1150px] max-sxl:max-w-[780px] max-mmmd:max-w-[560px] mx-auto">
            <ul className="flex flex-col gap-y-12 max-ssm:gap-y-8">
              {list?.map((carrer, index) => (
                <li key={index} className="grid grid-cols-[50px_1fr] gap-x-10 max-ssm:gap-x-4">
                  <span className="inline-block text-[50px] leading-[50px] max-ssm:text-2xl max-sxl:text-4xl text-black  font-source-serif-prolight">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>
                    <span className="text-3xl max-sxl:text-2xl max-ssm:text-xl block mb-3 text-black  font-source-serif-prolight">
                      {carrer.title}
                    </span>
                    <span className="text-lg text-black  font-human-sanslight ssm:text-base" dangerouslySetInnerHTML={{ __html: carrer.description }} />
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-black pt-10  font-human-sanslight text-xl max-mmmd:text-lg max-ssm:text-base">
              We also Require a Vehicle, Valid Licence and a Completed Local Police Check.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
