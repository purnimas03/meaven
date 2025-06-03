import Image from "next/image";

const Cost = ({cost = [] }) => {
  return (
    <section className="bg-[#3a3a3a]">
      <div className="margin-wrap-left max-ssm:pl-0 max-2xxl:!ml-0">
        <div className="grid grid-cols-2 max-ssm:grid-cols-1 items-center">
          <div className="max-ssm:order-2 max-w-[530px] fifity-wrap max-ssm:max-w-full py-16 max-ssm:px-4 max-ssm:text-center max-mmd:py-10 pr-4">
            <h3 className="text-[50px] max-sxl:text-4xl text-white mb-5 font-source-serif-prolight">
             {cost.title}
            </h3>
            <div
              className="text-lg text-white pb-8 last:pb-0 font-human-sanslight"
              dangerouslySetInnerHTML={{ __html: cost.content || '' }}
            ></div>
            </div>
            {cost?.image && (
              <div className="h-full shinewrap">
                <Image
                  src={cost.image.url}
                  alt={cost.image.alt}
                  className="h-full w-full object-cover"
                  width={800}
                  height={600}
                  loading="lazy"
                />
              </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default Cost;
