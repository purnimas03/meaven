"use client";
import { faXmark, faArrowLeft, faArrowRight, faCirclePlay, faImages } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


export default function GallerySection({galleryData = [] }) {
  const [popupIndex, setPopupIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [videoSrc, setVideoSrc] = useState("");

  const openImagePopup = (index) => {
    setPopupIndex(index);
    setCurrentImageIndex(0);
    setVideoSrc("");
  };

  const openVideoPopup = (index, src) => {
    setPopupIndex(index);
    setVideoSrc(src);
  };

  const closePopup = () => {
    setPopupIndex(null);
    setVideoSrc("");
  };

  return (
    <section className="py-24 max-ssm:py-16">
      <div className="container">
        <div className="text-center">
          <h3 className="text-[50px] max-sxl:text-4xl text-black mb-3  font-source-serif-prolight">
            Our Gallery
          </h3>
          <p className="text-lg text-black  font-human-sanslight max-w-[1000px] mx-auto">
            Check out what we've been cooking lately at Maeven Chef
          </p>
        </div>

        <div className="grid grid-cols-4 max-sxl:grid-cols-3 max-mmmd:grid-cols-2 max-ssm:grid-cols-1 pt-16 gap-x-3 gap-y-4">
          {galleryData.map((item, index) => {
            if (item.type === "video") {
              return (
                <div
                  key={item.id}
                  className="relative cursor-pointer video-gallery before:pointer-events-none after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[37px] after:h-[44px] after:bg-no-repeat after:bg-contain after:bg-arrow-play before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[rgba(0,0,0,0.7)]"
                  onClick={() => openVideoPopup(index, item.videoUrl)}
                >
                  <img
                    src={item.thumbnail}
                    alt="Video Thumbnail"
                    className="h-[400px] max-xxl:h-[350px] object-cover w-full"
                  />
                   <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <FontAwesomeIcon icon={faCirclePlay} className="text-white text-5xl" />
                    </div>
                </div>
              );
            }

            if (item.type === "images" && item.images.length > 1) {
              return (
                <div
                  key={item.id}
                  className="relative hasmultiple image-gallery inset-0 after:absolute after:w-[24px] after:h-[25px] after:bg-contain after:bg-no-repeat after:top-2 after:right-2 after:bg-multiple-rectangle before:pointer-events-none before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[rgba(0,0,0,0.3)] cursor-pointer"
                  onClick={() => openImagePopup(index)}
                >
                  <img
                    src={item.images[0].url}
                    alt={item.images[0].title}
                    className="h-[400px] max-xxl:h-[350px] object-cover w-full"
                  />
                   <div className="absolute inset-0 bg-black/30 flex items-start justify-end p-2">
                        <FontAwesomeIcon icon={faImages} className="text-white text-2xl" />
                    </div>
                </div>
              );
            }

            if (item.type === "images" && item.images.length === 1) {
              return (
                <img
                  key={item.id}
                  src={item.images[0].url}
                  alt={item.images[0].title}
                  className="h-[400px] max-xxl:h-[350px] object-cover w-full"
                />
              );
            }

            return null;
          })}
        </div>

        {popupIndex !== null && (
          <div
            className="popup-show popup-container fixed top-0 left-0 w-full h-full bg-black/70 z-[999] flex items-center justify-center"
            onClick={closePopup}
          >
            <div className="relative w-[80%] max-w-[900px] h-[80%] ">
              <div
                className="absolute  -top-5 -right-5 bg-black text-white w-[40px] h-[40px] flex items-center justify-center rounded-full text-2xl cursor-pointer"
                onClick={closePopup}
              >
                <FontAwesomeIcon icon={faXmark} />
              </div>

              {videoSrc ? (
                <iframe
                  src={videoSrc}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={galleryData[popupIndex].images[currentImageIndex].url}
                    className="max-w-full max-h-[600px] object-contain"
                    alt="Popup Image"
                  />
                  <button
                    className="slider-nav left"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) =>
                        prev === 0
                          ? galleryData[popupIndex].images.length - 1
                          : prev - 1
                      );
                    }}
                  >
                    <div className="max-ssm:-left-[10px] transnitone-anim   group hover:bg-white cursor-pointer bg-[#b4b4b4] absolute left-0 z-10 top-[50%] -translate-y-1/2     flex justify-center  max-ssm:w-[32px] max-ssm:h-[32px] items-center rounded-full w-[40px] h-[40px]">
                        <FontAwesomeIcon className="text-lg transition-4s group-hover:text-black text-white   max-ssm:text-base" icon={faArrowLeft}  />
                     </div>
                  </button>
                  <button
                    className="slider-nav right"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) =>
                        prev === galleryData[popupIndex].images.length - 1
                          ? 0
                          : prev + 1
                      );
                    }}
                  >
                    <div className="max-ssm:-right-[10px] transnitone-anim -translate-y-1/2  group hover:bg-white cursor-pointer bg-[#b4b4b4] absolute right-0  z-10 top-[50%]     flex justify-center items-center rounded-full max-ssm:w-[32px] max-ssm:h-[32px] w-[40px] h-[40px]">
                     <FontAwesomeIcon className="text-lg transition-4s group-hover:text-black text-white   max-ssm:text-base" icon={faArrowRight}  />
                     </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
