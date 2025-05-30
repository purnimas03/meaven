// components/DishDetail.js
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { fetchFromAPI } from "../../../../lib/fetchapi";

export default function DishDetail({ slug }) {
  const [dish, setDish] = useState(null);

  useEffect(() => {
    async function loadDish() {
      const allDishes = await fetchFromAPI('/custom/v1/weakly-meal-prep');
      const selected = allDishes.find(d => {
        const lastSlug = d.slug?.split('/').filter(Boolean).pop();
        return lastSlug === slug;
      });
      setDish(selected);
    }

    if (slug) {
      loadDish();
    }
  }, [slug]);

  if (!dish) return <p>Loading...</p>;

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex max-ssm:flex-col gap-y-5 justify-between items-center max-sxx:items-start max-ssm:items-center gap-x-5">
          <h3 className="text-[50px] max-2xl:text-4xl ssm:text-center text-black font-source-serif-prolight">
            {dish.title}
          </h3>
          <div className="text-center">
            <Link href="#" className="group min-w-[170px] max-ssm:mx-auto block max-w-fit">
              <div className="bg-yellowish border-2 border-solid border-black shadow-custombtn px-5 py-[10px] z-10 group-hover:before:top-0 overflow-hidden relative before:content-[''] before:absolute before:top-full before:left-0 before:w-full before:h-full before:bg-[#178b77] before:z-[-1] before:duration-[.5s]">
                <span className="inline-block text-[15px] font-human-sansmedium group-hover:text-white text-black uppercase">
                  Add To Basket
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className="pt-8 max-ssm:pt-10 relative">
          <Image
            loading="lazy"
            alt={dish.alt}
            src={dish.image}
            width={1200}
            height={662}
            className="w-full max-h-[662px] h-full object-cover"
          />
        </div>

        {/* More details below if needed */}
      </div>
    </section>
  );
}
