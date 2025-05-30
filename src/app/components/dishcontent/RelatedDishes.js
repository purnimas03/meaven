"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../../../../lib/fetchapi";


const RelatedDishes = ({ slug }) => {
  const [relatedDishes, setRelatedDishes] = useState([]);

  useEffect(() => {
    async function loadRelatedDishes() {
      const allDishes = await fetchFromAPI('/custom/v1/weakly-meal-prep');

      // Filter out the current dish by comparing slug
      const filtered = allDishes.filter(dish => {
        const dishSlug = dish.slug.split('/').filter(Boolean).pop();
        return dishSlug !== slug;
      });

      setRelatedDishes(filtered);
    }

    loadRelatedDishes();
  }, [slug]);

    return (
      <section className="py-24 bg-[#fde9ce] max-ssm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-[50px] max-sxl:text-4xl text-black mb-8  font-source-serif-prolight">
              Related Dishes
            </h3>
            <p className="text-lg text-black font-human-sanslight max-w-[1000px] mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
  
          <div className="flex justify-center max-sxl:grid grid-cols-4 mt-8 max-sxl:grid-cols-2 max-ssm:grid-cols-1 gap-y-5 gap-x-5 bg-[#ffedd6] p-5 pb-10 border border-solid border-[#fff8ee]">
            {relatedDishes.map((dishes , index) => (
            <div key={index} className="border-r pr-5 last:pr-0 max-sxl:pr-0 last:border-r-0 w-[25%] max-sxl:w-full border-[#fff8ee] max-sxl:border-0 border-solid max-ssm:border-r-0 max-ssm:pr-0">
                <Link href="#">
                    <img
                    loading="lazy"
                    alt={dishes.alt}
                    src={dishes.image}
                    className="w-full max-xxl:h-[300px] h-[325px] object-cover"
                    />
                    <h4 className="text-3xl text-black mt-7 mb-2   font-source-serif-prolight">
                    {dishes.title}
                    </h4>
                    <span className="block font-human-sanslight text-black text-lg">
                    Time: {dishes.time}
                    </span>
                    <span className="block font-human-sanslight text-black text-lg">
                    Preparations:
                    </span>
                    <p className="font-human-sanslight text-black text-lg mt-4">
                    <span>{dishes.ingredients.map((item) => item.items).join(', ')}</span>
                    </p>
                </Link>
            </div>
            ))}
          </div>
        </div>
      </section>
    );
};
  
  export default RelatedDishes;
  