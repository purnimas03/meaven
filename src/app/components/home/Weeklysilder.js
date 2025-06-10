'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { register } from 'swiper/element/bundle';

register(); // Swiper web component registration

const WeeklyMealPrep = ({ homeWeeklyMeal , slidesWeaklyMeal = [] }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperEl = swiperRef.current;
    if (swiperEl && !swiperEl.swiper) {
      swiperEl.initialize();
    }
  }, []);
 
  return (
    <section
      style={{ backgroundImage: "url('/weekly-bg.jpg')" }}
      className="bg-cover bg-black bg-center bg-no-repeat py-24 ssm:py-16"
    >
      <div className="margin-wrap-left max-2xxl:!ml-0">
        <div className="grid grid-cols-[460px_1fr] gap-y-10 max-sxl:grid-cols-[330px_1fr] max-mmd:grid-cols-[280px_1fr] max-ssm:grid-cols-1 items-center gap-x-8">
          <div className="max-ssm:order-2 text-left max-ssm:text-center">
            <h3 className="text-[50px] max-sxl:text-4xl max-mmd:text-3xl text-white mb-8 font-source-serif-proregular">
              Weekly Meal Prep
            </h3>
            <div className="text-white text-lg font-human-sanslight slidesleft-desc pb-9">
              Explore our curated meals prepped for the week. High on nutrition, low on prep time!
            </div>
            <div className="text-center mt-10">
              <Link
                className="group min-w-[170px] max-ssm:mx-auto block max-w-fit"
                href={homeWeeklyMeal?.button?.button_url || '#'}
              >
                <div className="bg-yellowish border-2 border-solid border-black shadow-custombtn px-5 py-[10px] z-10 group-hover:before:top-0 overflow-hidden relative before:content-[''] before:absolute before:top-full before:left-0 before:w-full before:h-full before:bg-[#178b77] before:z-[-1] before:duration-[.5s]">
                  <span className="inline-block text-[15px] font-human_sansmedium group-hover:text-white text-black uppercase">
                    See More
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Swiper Slides */}
          <div className="relative w-full max-w-full overflow-hidden">
          <swiper-container
            ref={swiperRef}
            init="false"
            slides-per-view="3.2"
            space-between="20"
            className="w-full max-w-full border-t border-l border-b border-[#a1d0c8] border-solid swiper-container2 overflow-hidden"
            scrollbar='{"el": ".swiper-scrollbar2", "draggable": true}'
            autoplay={true}
            speed={300}
          >
            {slidesWeaklyMeal.map((dish, index) => {
              const slug = dish.slug.split('/').filter(Boolean).pop();
              return (
                <swiper-slide key={index}>
                  <Link
                    href={`/weaklymealprep/${slug}`}
                    className="block relative px-5 pt-5 pb-9 border-r border-[#a1d0c8] border-solid"
                  >
                    <img
                      loading="lazy"
                      alt={dish.alt}
                      src={dish.image}
                      className="w-full xxl:h-[300px] h-[325px] object-cover"
                    />
                    <h4 className="text-3xl text-white max-xxxl:text-2xl max-xxxl:min-h-[50px] mt-7 mb-2 font-source-serif-prolight">
                      {dish.title}
                    </h4>
                    <span className="block font-human-sanslight text-white text-lg">
                      Time: {dish.time} mins
                    </span>
                    <span className="block font-human-sanslight text-white text-lg">
                      Preparations:
                    </span>
                    <p className="font-human-sanslight break-all line-clamp-3 min-h-[84px] text-white text-lg mt-4">
                      {dish.ingredients.map((item) => item.items).join(', ')}
                    </p>
                  </Link>
                </swiper-slide>
              );
            })}
          </swiper-container>
            {/* Optional scrollbar element */}
            <div className="pt-9 pb-1 cursor-pointer">
              <div className="swiper-scrollbar2 swiper-dragger bg-[#aecab4] h-[2px] relative"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyMealPrep;
