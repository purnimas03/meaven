"use client";
import { useState, useEffect } from "react";
import { fetchFromAPI } from "../../../../lib/fetchapi";
import Image from "next/image";
import Link from "next/link";

export default function DishesSection() {
  const [dishesData, setDishesData] = useState([]);

  useEffect(() => {
    async function loadDishes() {
      try {
        const data = await fetchFromAPI("/custom/v1/weakly-meal-prep");
        console.log("Fetched Dishes:", data); // for debugging
        setDishesData(data);
      } catch (error) {
        console.error("Failed to fetch dishes:", error);
      }
    }

    loadDishes();
  }, []);

  return (
    <section className="py-24 bg-[#fde9ce] max-ssm:py-16">
      <div className="container">
        <div className="text-center">
          <h3 className="text-[50px] max-sxl:text-4xl text-black mb-8 font-source-serif-prolight">
            Dishes
          </h3>
          <p className="text-lg text-black font-human-sanslight max-w-[1000px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="flex justify-center max-sxl:grid grid-cols-4 mt-8 max-sxl:grid-cols-2 max-ssm:grid-cols-1 gap-y-5 gap-x-5 bg-[#ffedd6] p-5 pb-10 border border-solid border-[#fff8ee] max-sxl:[&>*:nth-child(even)]:border-r-0 max-sxl:[&>*:nth-child(even)]:pr-0">
          {dishesData.map((dish, index) => {
            const slug = dish?.slug?.split("/").filter(Boolean).pop();

            return (
              <div
                key={index}
                className="border-r pr-5 last:pr-0 max-sxl:pr-0 last:border-r-0 w-[25%] max-sxl:w-full border-[#fff8ee] max-ssm:border-b max-ssm:last:pb-0 max-ssm:last:border-b-0 max-ssm:border-[#555555] max-ssm:border-solid max-ssm:pb-[10px] max-sxl:border-0 border-solid max-ssm:border-r-0 max-ssm:pr-0"
              >
                <Link href={`/weaklymealprep/${slug}`}>
                  <Image
                    src={dish?.image || "/fallback.jpg"}
                    alt={dish?.alt || "Dish Image"}
                    width={600}
                    height={400}
                    className="w-full max-xxl:h-[300px] h-[325px] object-cover"
                  />
                  <h4 className="text-3xl text-black mt-7 mb-2 font-source-serif-prolight">
                    {dish?.title || "Untitled Dish"}
                  </h4>
                  <span className="block font-human-sanslight text-black text-lg">
                    Time: {dish?.dish_time || "N/A"} mins
                  </span>
                  <span className="block font-human-sanslight text-black text-lg">
                    Preparations:
                  </span>
                  <p className="font-human-sanslight text-black text-lg mt-4">
                    {dish?.ingredients?.map((item) => item.items).join(", ") || "N/A"}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link href="/all-dish" className="group min-w-[170px] mx-auto block max-w-fit">
            <div className="bg-yellowish border-2 border-solid border-black shadow-custombtn px-5 py-[10px] z-10 group-hover:before:top-0 overflow-hidden relative before:content-[''] before:absolute before:top-full before:left-0 before:w-full before:h-full before:bg-[#178b77] before:z-[-1] before:duration-[.5s]">
              <span className="inline-block text-[15px] font-human_sansmedium group-hover:text-white text-black uppercase">
                View More
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
