'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../../../../lib/fetchapi";

export default function BookingSection() {
  const [acfFields, setAcfFields] = useState(null);
  
  useEffect(() => {
    async function loadTextImage() {
      const section = await fetchFromAPI('/wp/v2/pages?slug=home');
      if (Array.isArray(section) && section.length > 0) {
        const text_and_image_section = section[0]?.acf?.text_and_image_section;
        setAcfFields(text_and_image_section);
      }
    }

    loadTextImage();
  }, []);

  if (!acfFields) return null;

  return (

    <section
      className="py-24 bg-cover bg-center bg-no-repeat max-ssm:py-16"
      style={{backgroundImage: `url(${acfFields?.background_image?.url})`,}}
    >
      <div className="container">
        <div className="grid grid-cols-[1fr_500px] gap-y-10 max-sxx:grid-cols-1 max-xxl:grid-cols-[1fr_450px] max-sxl:grid-cols-[1fr_400px] gap-x-16 items-center">
          <div className="max-sxx:order-2">
            {acfFields.repeated_sub_section.map( (fields , index) => (
            <div key={index} className="border-b border-[#cbbead] pb-8 mb-8 last:pb-0 last:mb-0 last:border-b-0 grid grid-cols-[340px_1fr] max-ssm:grid-cols-1 max-sxl:grid-cols-[250px_1fr] max-xxl:grid-cols-[300px_1fr] gap-x-6">
              <h3 className="font-source-serif-proregular font-light text-black text-3xl max-sxl:text-2xl">{fields.title}</h3>
              <p className=" font-human-sanslight text-lg text-black">{fields.context}</p>
            </div>
            ))}
          </div>
          <div className="max-sxx:mx-auto max-sxx:text-center max-sxx:block">
            <Image
              src={acfFields?.['3rd_section_image']?.url}
              alt={acfFields?.['3rd_section_image']?.alt}
              width={500}
              height={500}
              className="transnitone-anim hover:-translate-y-[10px]"
            />
          </div>
        </div>
        <div className="text-center mt-10">
          <Link href={acfFields?.button_link} className="group min-w-[170px] mx-auto block max-w-fit">
            <div className="bg-yellowish border-2 border-solid border-black shadow-custombtn px-5 py-[10px] z-10 relative overflow-hidden before:content-[''] before:absolute before:top-full before:left-0 before:w-full before:h-full before:bg-[#178b77] before:z-[-1] before:duration-[.5s] group-hover:before:top-0">
              <span className="inline-block text-[15px]  font-human-sansmedium group-hover:text-white text-black uppercase">
                {acfFields?.button_title}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
