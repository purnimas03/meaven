import Image from 'next/image';
import Link from 'next/link';

export default function OurChefs({ checfList = [], chefAcf = {} }) {
 
 return (
    <section className="py-24 bg-[#ebebe5] max-ssm:py-16">
      <div className="container">
        <div className="text-center">
          <h3 className="text-[50px] max-sxl:text-4xl text-black mb-8  font-source-serif-prolight">{chefAcf.chef_heading}</h3>
          <p className="text-lg text-black  font-human-sanslight max-w-[1000px] mx-auto">
          {chefAcf.content}
          </p>
        </div>
        <div className="grid grid-cols-4 max-sxl:grid-cols-3 max-ssm:grid-cols-1 gap-y-10 max-mmd:grid-cols-2 pt-20 gap-x-14">
          {checfList.map((chef, index) => (
            <div key={index} className="text-center group">
              <div className="relative max-sxl:max-w-[270px] max-sxl:mx-auto before:bg-lemon-small before:max-w-[70px] before:w-full before:h-[70px] before:bg-contain before:bg-no-repeat before:absolute before:bottom-0  before:right-4">
                <Image
                  src={chef.image}
                  alt={chef.alt}
                  width={304}
                  height={304}
                  className="w-[304px] border-[3px] border-solid border-[#ffdb00] h-[304px] rounded-full mx-auto object-cover group-hover:border-[#178b77] transnitone-anim  max-1sxl:w-[270px] max-1sxl:h-[270px] group-hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.9)]"
                />
              </div>
              <div className="mt-10">
                <h4 className="mb-2 max-ssm:text-2xl text-3xl text-black  font-source-serif-prolight">{chef.title}</h4>
                <span className="text-lg max-ssm:text-base text-black  font-human-sanslight inline-block">{chef.role}</span>
              </div>
              <div className="mt-5 max-ssm:mt-3">
                <p className="text-lg max-ssm:text-base text-black font-human-sanslight line-clamp-2">{chef.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center btn mt-16 max-ssm:mt-11">
            {chefAcf?.button_link && (
              <Link
                href={chefAcf.button_link}
                className="group min-w-[170px] mx-auto block max-w-fit"
              >
                <div className="bg-yellowish border-2 border-solid border-black shadow-custombtn px-5 py-[10px] z-10 relative overflow-hidden before:content-[''] before:absolute before:top-full before:left-0 before:w-full before:h-full before:bg-[#178b77] before:z-[-1] before:duration-[.5s] group-hover:before:top-0">
                  <span className="inline-block text-[15px] font-human-sansmedium group-hover:text-white text-black uppercase">
                    {chefAcf.button_label}
                  </span>
                </div>
              </Link>
            )}
        </div>
      </div>
    </section>
  );
}
