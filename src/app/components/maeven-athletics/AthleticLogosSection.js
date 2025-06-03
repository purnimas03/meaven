const AthleticLogosSection = ({ logos = [] }) => {
  return (
    <section className="pb-24 pt-9 max-ssm:pb-16">
      <div className="container">
        <div className="grid athletics-logo grid-cols-3 items-center max-w-[976px] mx-auto gap-x-28 gap-y-20 max-mmd:gap-y-12 max-mmd:gap-x-20 max-ssm:grid-cols-2">
          {logos.map((logo, index) => (
            <img
              key={index}
              loading="lazy"
              alt={logo.image.alt}
              className={`max-w-72 transnitone-anim hover:-translate-y-1 w-full object-contain ${
                index === 0 ? 'h-80 max-ssm:h-auto' : 'h-40 max-ssm:h-auto'
              }`}
              src={logo.image.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AthleticLogosSection;
