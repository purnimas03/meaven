'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { fetchFromAPI } from '../../../../lib/fetchapi';

const AthleticsApproachSection = () => {
  const [athleticApproach, setAthleticApproach] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadApproachAthlete() {
      try {
        const approcahlist = await fetchFromAPI('/wp/v2/pages?slug=maeven-athletics');
        if (Array.isArray(approcahlist) && approcahlist.length > 0) {
          const approachData = approcahlist[0]?.acf?.our_approach_section;
          if (approachData) {
            setAthleticApproach(approachData);
          } else {
            throw new Error('Approach section is undefined');
          }
        } else {
          throw new Error('Fetched list is empty or invalid');
        }
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadApproachAthlete();
  }, []);

  return (
    <section className="py-24 max-ssm:py-16 benefits benefits-wrapper bg-[#158370]">
      <div className="container">
        {loading ? (
          <p className="text-white text-center">Loading...</p>
        ) : error ? (
          <p className="text-red-500 text-center">Error: {error}</p>
        ) : (
          <div className="grid grid-cols-2 items-center max-mmmd:grid-cols-1 gap-y-11 max-xxl:items-start gap-x-24">
            <div className="max-mmmd:order-2 max-mmmd:text-center">
              {athleticApproach?.heading && (
                <h3 className="text-[50px] max-sxl:text-4xl text-white mb-5 font-source-serif-prolight">
                  {athleticApproach.heading}
                </h3>
              )}

              {athleticApproach?.content && (
                <div
                  className="description font-human-sanslight text-lg max-ssm:text-base text-white"
                  dangerouslySetInnerHTML={{ __html: athleticApproach.content }}
                />
              )}

              <div className="text-center mt-10">
                <Link
                  href="/booking"
                  className="group min-w-[170px] max-mmmd:mx-auto block max-w-fit"
                >
                  <div className="bg-yellowish border-2 border-solid border-black shadow-custombtn px-5 py-[10px] z-10 group-hover:before:top-0 overflow-hidden relative before:content-[''] before:absolute before:top-full before:left-0 before:w-full before:h-full before:bg-[#178b77] before:z-[-1] before:duration-[.5s]">
                    <span className="inline-block text-[15px] font-human-sansmedium group-hover:text-white text-black uppercase">
                      Call for Booking
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            <div className="relative ml-auto max-mmmd:mx-auto images-wrap h-[510px] max-sxl:h-[420px] max-sxl:w-[420px] max-ssm:h-[300px] max-ssm:w-[300px] w-[510px] rounded-full transition-all before:transition-all hover:before:-translate-y-3 before:absolute max-mmmd:before:top-7 max-mmmd:before:left-2 before:top-0 before:left-10 before:bg-no-repeat before:bg-contain before:w-[121px] max-mmmd:before:w-[100px] before:z-50 max-mmmd:before:h-[100px] before:h-[121px] bg-lemonpic max-ssm:before:w-[70px] max-ssm:before:h-[70px]">
              <Image
                loading="lazy"
                alt={athleticApproach.image.alt}
                width={510}
                height={510}
                className="h-[510px] max-sxl:h-[420px] max-sxl:w-[420px] max-ssm:h-[300px] max-ssm:w-[300px] transition-all rounded-full w-[510px] object-cover"
                src={athleticApproach.image.url}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AthleticsApproachSection;
