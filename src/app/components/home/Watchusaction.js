
const WatchUsInAction = () => {

  return (
    <section className="py-24 bg-[#178c78] ssm:py-16">
      <div className="container">
        <h3 className="text-[50px] text-center max-sxl:text-4xl text-white mb-20 max-xxl:mb-14 max-ssm:mb-11 font-source-serif-prolight">
          Watch us in Action
        </h3>
        <div className="grid grid-cols-2 max-ssm:grid-cols-1 gap-y-10 gap-x-9">
          {videos.map((video, index) => (
            <div className="relative" key={index}>
              <div
                className={`relative cursor-pointer overflow-hidden border-[6px] mb-9 border-solid border-[#ffffff] 
                  before:z-10 before:absolute ${playingVideo !== index ? "bg-arrow-transparent" : "before:bg-none"} 
                  before:bg-no-repeat before:bg-contain before:top-1/2 before:left-1/2 before:-translate-x-1/2 
                  before:-translate-y-1/2 before:w-[66px] before:h-[67px] 
                  after:absolute after:w-full after:top-0 after:left-0 after:bottom-0 
                  after:right-0 after:bg-[rgba(0,0,0,0.4)] after:h-full 
                  rounded-tl-[40px] rounded-br-[40px]`}
                onClick={() => setPlayingVideo(index)}
              >
                {playingVideo === index ? (
                  <>
                    <button
                      className="absolute top-4 right-4 z-10 bg-white text-black text-3xl w-10 h-10 flex items-center justify-center rounded-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPlayingVideo(null);
                      }}
                    >
                      &times;
                    </button>
                    <iframe
                      className="w-full h-[386px] mmmd:h-[350px] rounded-tl-[40px] rounded-br-[40px] object-cover"
                      src={video.iframe_src}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </>
                ) : (
                  <img
                    src={video.thumbnail.url}
                    alt="video-image"
                    className="w-full h-[386px] mmmd:h-[350px] rounded-tl-[40px] rounded-br-[40px] object-cover"
                  />
                )}
              </div>
              <h4 className="text-white font-source-serif-proregular text-3xl mb-7 max-ssm:mb-5">
                {video.title}
              </h4>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WatchUsInAction;
