'use client';
import React, { useEffect, useState } from 'react';
const AthleticHowItWorks = ({athleticHowItWorks = [] }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const updateMobileStatus = () => setIsMobile(window.innerWidth < 991);
    updateMobileStatus();
    window.addEventListener('resize', updateMobileStatus);
    return () => window.removeEventListener('resize', updateMobileStatus);
  }, []);

  const sectionTitle = 'How It Works';
  
  return (
    <section className="py-24 max-ssm:py-16">
      <div className="container">
        <h3 className="text-[50px] max-sxl:text-4xl text-black text-center mb-2  font-source-serif-prolight max-sxx:mb-4">
          {sectionTitle}
        </h3>

        <div className="px-3">
          {/* Tabs Header */}
          <div className="border-b border-gray-300 mb-6">
            {/* Mobile Dropdown */}
            {isMobile && (
              <div className="block lg:hidden relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="w-full py-2 px-4 bg-gray-200 text-gray-700 rounded-md focus:outline-none flex justify-between items-center"
                >
                  <span>{`Step ${activeTab}`}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showDropdown && (
                  <ul className="absolute w-full bg-white border border-gray-300 rounded-md shadow-lg mt-2 z-10">
                    {athleticHowItWorks.map((step, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setActiveTab(index + 1);
                          setShowDropdown(false);
                        }}
                        className={`py-2 px-4 hover:bg-gray-100 cursor-pointer ${
                          activeTab === index + 1 ? 'bg-yellow-100' : ''
                        }`}
                      >
                        {step.tab_heading}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Desktop Tabs */}
            {!isMobile && (
              <div className="grid grid-cols-4 text-center">
                {athleticHowItWorks.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index + 1)}
                    className={`py-2 text-[#252525] -mt-[1px] text-3xl  font-source-serif-prolight text-center focus:outline-none ${
                      activeTab === index + 1 ? 'border-b-[3px] border-yellow-400' : ''
                    }`}
                  >
                    {step.tab_heading}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Tab Content */}
          <div>
            {athleticHowItWorks.map((step, index) => (
              activeTab === index + 1 && (
                <div
                  key={index}
                  className="grid grid-cols-[590px_1fr] max-sxx:grid-cols-1 gap-y-16 mt-20 max-sxx:mt-14 items-center gap-x-10"
                >
                  <div className="justify-self-start mmmd:justify-self-center max-sxx:mx-auto 2xxl:pl-5 relative transnitone-anim before:transnitone-anim before:-z-[1] hover:before:bg-[#fddb00] before:-left-[22px] before:-bottom-[35px] before:bg-[#168876] before:absolute before:rounded-tl-[290px] max-sxx:before:w-[350px] max-sxx:before:h-[500px] max-ssm:before:w-[250px] max-ssm:before:h-[400px] before:w-[490px] before:h-[510px] before:rounded-tr-[290px]">
                    <img
                      loading="lazy"
                      alt="step"
                      className="transnitone-anim rounded-tl-[290px] rounded-tr-[290px] w-[490px] max-sxx:w-[350px] max-ssm:w-[250px] max-ssm:h-[400px] max-sxx:h-[500px] h-[510px] object-cover"
                      src={step.tab_content.image.url}
                    />
                  </div>
                  <div className="max-sxx:text-center">
                    <h4 className="text-[50px] max-sxl:text-4xl text-black mb-2  font-source-serif-prolight" dangerouslySetInnerHTML={{ __html: step.tab_content.title }} />
                    <h5 className="text-2xl text-[#252525] mb-2  font-source-serif-prolight" dangerouslySetInnerHTML={{ __html: step.tab_content.sub_title }} />
                    <p className=" font-human-sanslight text-lg max-sxx:max-w-full max-w-[708px] text-black" dangerouslySetInnerHTML={{ __html: step.tab_content.description }} />
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AthleticHowItWorks;
