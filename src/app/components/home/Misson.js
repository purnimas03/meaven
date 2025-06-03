import Image from 'next/image';

export default function MissionSection() {
  
  return (
    <section className="bg-celadongreen py-24 max-ssm:py-16">
      <div className="container">
        <div className="grid pb-28 max-mmmd:pb-20 max-ssm:pb-10 grid-cols-[380px_1fr] gap-y-9 max-ssm:text-center max-ssm:grid-cols-1 gap-x-32 max-mmmd:gap-x-16">
          {acfFields?.mission_image?.url && (
            <Image
              loading="lazy"
              alt={acfFields.mission_image?.alt || "mission image"}
              className="max-w-[380px] max-ssm:mx-auto w-full block max-xxl:max-w-72"
              src={acfFields.mission_image.url}
              width={380}
              height={100}
            />
          )}
          <p
            className="font-source-serif-proregular text-[30px] max-sxl:text-2xl leading-10 text-white"
            dangerouslySetInnerHTML={{ __html: acfFields.mission_heading }}
          />
        </div>

        <div className="grid max-ssm:before:hidden grid-cols-2 gap-x-11 gap-y-10 max-ssm:grid-cols-1 relative before:max-w-[5px] before:w-full before:h-[259px] before:bg-contain bg-ellipse-border before:absolute before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2">
          {acfFields?.mission_repeated_section?.map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="font-source-serif-proregular pb-6 max-ssm:pb-4 text-[30px] max-mmd:text-2xl leading-10 text-white">
                {item.heading}
              </h3>
              <p className="max-w-[520px] text-center mx-auto text-white font-human-sanslight text-lg">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
