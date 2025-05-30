"use client";
import Image from "next/image";
import { fetchFromAPI } from '../../../../lib/fetchapi';
import { useEffect, useState } from "react";

const AthleticIconBoxes = () => {
  const [athleticIcon, setathleticIcon] = useState([]);
      
  useEffect(() => {
  async function loadIcons() {
    const list = await fetchFromAPI('/wp/v2/pages?slug=maeven-athletics');
    if (Array.isArray(list) && list.length > 0) {
      const athleteData = list[0]?.acf?.athletic_icon_box_section;
      if (athleteData) {
        setathleticIcon(athleteData);
      } else {
        console.error('Athletic icon box section is undefined');
      }
    } else {
      console.error('Fetched list is not an array or is empty');
    }
  }
  loadIcons();
}, []);

  return (
    <section className="py-24 max-ssm:py-16">
      <div className="container">
        <div className="grid max-w-[1200px] max-mmmd:grid-cols-2 max-ssm:grid-cols-1 athletics-certifed mx-auto grid-cols-3 gap-4">
          {athleticIcon.map((boxicon, index) => (
            <div
              key={index}
              className="bg-[#ebebe6] hover:bg-[#3a3a3a] group pt-12 pb-24 max-ssm:py-10 px-3 transnitone-anim flex flex-col items-center text-center"
            >
              <Image
                loading="lazy"
                alt={boxicon.image.alt}
                src={boxicon.image.url}
                width={40}
                height={40}
                className="transnitone-anim"
              />
              <h3 className="text-black group-hover:text-white pb-5 pt-3 max-sxl:text-2xl transnitone-anim text-3xl  font-source-serif-prolight">
                {boxicon.text}
              </h3>
              <p className="text-black max-ssm:text-base max-w-[350px] group-hover:text-white transnitone-anim mx-auto text-xl  font-human-sanslight">
                {boxicon.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AthleticIconBoxes;
