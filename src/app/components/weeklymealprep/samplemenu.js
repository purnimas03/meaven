'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState , useEffect } from "react";
import { fetchFromAPI } from "../../../../lib/fetchapi";


export default function SampleMenu() {
  const [menulist, fetchMenu] = useState([]);
      
  useEffect(() => {
    async function loadMenuList() {
      const list = await fetchFromAPI('/custom/v1/sample-menu');
      fetchMenu(list);
    }
    loadMenuList();
  }, []);

  return (
    <section className="py-24 relative before:w-full before:h-1/2 before:absolute before:top-0 before:right-0 before:bg-[#fddb00] before:-z-[1] max-ssm:py-16">
      <div className="container">
        <h3 className="text-[50px] text-center max-sxl:text-4xl text-black mb-8  font-source-serif-prolight">
          Sample Menu
        </h3>
        <div className="relative max-xxl:px-8 max-ssm:px-3 max-w-[1460px] mx-auto">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-button-next3',
              prevEl: '.swiper-button-prev3',
            }}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full flex items-stretch max-w-[1250px] mx-auto swiper-container3"
          >
            {menulist.map((item, index) => (
              <SwiperSlide key={index} className="relative !flex flex-col !h-auto items-stretch">
                <div className="bg-[#090909] flex flex-col h-full">
                  <div className="shinewrap">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={400}
                      height={265}
                      className="w-full h-[265px] object-cover"
                    />
                  </div>
                  <div className="p-11 pt-8 sxl:p-9 mmmd:p-7">
                    <h4 className="text-2xl text-white mb-2  font-source-serif-prolight">{item.title}</h4>
                    <div className=" font-human-sanslight text-white text-lg mt-4 samplemenu-desc max-ssm:text-base">
                     {item.items.map((value , index) => (
                        <p key={index}>{value.preparation_item}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Navigation Buttons */}
          <div>
            <div className="swiper-button-prev3 max-ssm:-left-[10px] transnitone-anim group hover:bg-[#393939] cursor-pointer bg-[#b4b4b4] absolute left-0 z-10 top-[50%] -translate-y-1/2 flex justify-center max-ssm:w-[32px] max-ssm:h-[32px] items-center rounded-full w-[40px] h-[40px]">
            <FontAwesomeIcon className="text-lg max-ssm:text-base text-white transition-4s group-hover:text-white" icon={faChevronLeft} />
            </div>
            <div className="swiper-button-next3 max-ssm:-right-[10px] transnitone-anim group hover:bg-[#393939] cursor-pointer bg-[#b4b4b4] absolute right-0 z-10 top-[50%] -translate-y-1/2 flex justify-center items-center rounded-full max-ssm:w-[32px] max-ssm:h-[32px] w-[40px] h-[40px]">
              <i className="fa-solid fa-chevron-right text-lg ssm:text-base text-white transition-4s group-hover:text-white" />
              <FontAwesomeIcon className="text-lg max-ssm:text-base text-white transition-4s group-hover:text-white" icon={faChevronRight} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
