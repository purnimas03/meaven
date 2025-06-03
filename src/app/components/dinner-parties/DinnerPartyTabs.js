'use client';

import { useState } from "react";

export default function DinnerPartyTabs({ tabberData = [] }) {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedTab, setSelectedTab] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section className="py-24 ssm:py-16">
      <div className="container">
        <h3 className="text-[50px] max-sxl:text-4xl text-black text-center mb-5  font-source-serif-prolight">
          Dinner Party Themes
        </h3>

        {/* Desktop Tabs */}
        <div className="hidden lg:flex flex-wrap justify-center gap-3">
          {tabberData.map((tabber, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(index + 1);
                setSelectedTab(tabber.tab_title);
              }}
              className={`px-5 py-5 min-w-[210px] max-xxl:min-w-max text-2xl  font-source-serif-prolight transition-all hover:bg-[#178c78] hover:text-white ${
                activeTab === index + 1
                  ? 'bg-[#178c78] text-white'
                  : 'bg-[#ebebe6] text-black'
              }`}
            >
              {tabber.tab_title}
            </button>
          ))}
        </div>

        {/* Mobile Dropdown */}
        <div className="lg:hidden mt-4">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full bg-gray-100 text-gray-700 px-4 py-2 text-xl  font-source-serif-prolight flex justify-between items-center"
          >
            <span>{selectedTab}</span>
            <svg
              className={`w-5 h-5 transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="bg-gray-100 shadow-md mt-1">
              {tabberData.map((tabber, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveTab(index + 1);
                    setIsDropdownOpen(false);
                    setSelectedTab(tabber.tab_title);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-teal-500 hover:text-white"
                >
                  {tabber.tab_title}
                </button>
              ))}
            </div>
          )}
        </div>

       {/* Content Area */}
        <div className="mt-16">
          {tabberData.map((tabber, index) => {
            if (activeTab !== index + 1) return null;

            const rightContentArray = tabber.tab_right_side_content || [];

            return (
              <div
                key={index}
                className="grid grid-cols-[1fr_590px] max-xxl:grid-cols-[1fr_490px] max-sxl:grid-cols-2 max-mmd:grid-cols-1 gap-y-7 items-stretch gap-x-8"
              >
                {/* Image Slider */}
                <div className="relative overflow-hidden w-full h-full">
                  <Slider tabber={tabber} />
                </div>

                {/* Content Box */}
                <div className="bg-[#178b77] contentwrapstabber py-[75px] ssm:py-14">
                  {rightContentArray.map((item, idx) => (
                    <div key={idx} className="pb-5 ssm:pb-0 last:pb-0">
                      <h4 className="bg-[#ebebe5] py-[8px] px-5 font-source-serif-prolight text-black inline-block rounded-tr-[20px] text-3xl max-ssm:text-xl">
                        {item.heading}
                      </h4>
                      <div
                        className="tabber-desc p-6 text-white text-lg max-ssm:text-base font-human-sanslight"
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function Slider({ tabber }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = tabber.tab_left_side_content || [];

  return (
    <div className="slider-container5 relative">
      {images.map((img, index) => (
        <div key={index} className={currentSlide === index ? 'block' : 'hidden'}>
          <img
            loading="lazy"
            alt={img.image.alt}
            src={img.image.url}
            className="w-full h-full object-cover max-h-[600px] min-h-[600px] transition-all duration-500"
          />
        </div>
      ))}

      {/* Prev */}
      <button
        onClick={() => setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)}
        disabled={currentSlide === 0}
        className={`left-5 absolute top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#393939] rounded-full w-10 h-10 flex items-center justify-center ${
          currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={() => setCurrentSlide((currentSlide + 1) % images.length)}
        disabled={currentSlide === images.length - 1}
        className={`right-5 absolute top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#393939] rounded-full w-10 h-10 flex items-center justify-center ${
          currentSlide === images.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
