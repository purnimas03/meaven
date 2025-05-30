import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faPhone,faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <div className="bg-white bookcall py-32 max-sxl:py-24">
        <div className="max-w-[943px] grid grid-cols-2 gap-y-8 max-ssm:grid-cols-1 mx-auto w-full px-4">
          {/* Left Section */}
          <div>
            <h2 className="text-5xl max-sxl:text-4xl text-black mb-10 font-source-serif-proregular">Book a Call for</h2>
          
            <a href="tel:(416) 459-6727" className="flex mb-7 w-fit group items-end gap-x-7">
              <div className="bg-yellowish border-2 border-solid border-black shadow-custombtn px-5 py-[10px] z-10 group-hover:before:top-0 overflow-hidden relative before:content-[''] before:absolute before:top-full before:left-0 before:w-full before:h-full before:bg-[#178b77] before:z-[-1] before:duration-[.5s]">
              <FontAwesomeIcon 
                icon={faPhone} 
                className="text-black max-w-[30px] w-full h-full duration-[.5s] group-hover:text-white text-3xl max-sxl:text-xl"
                />
              </div>
              <span className="font-human-sansmedium text-2xl max-sxl:text-xl text-[#3a3a3a] inline-block">(416) 459-6727</span>
            </a>
            <a href="mailto:maevenchef@gmail.com" className="flex w-fit group items-end gap-x-7">
              <div className="bg-yellowish border-2 border-solid border-black shadow-custombtn px-5 py-[10px] z-10 group-hover:before:top-0 overflow-hidden relative before:content-[''] before:absolute before:top-full before:left-0 before:w-full before:h-full before:bg-[#178b77] before:z-[-1] before:duration-[.5s]">
              <FontAwesomeIcon 
                icon={faEnvelope} 
                className="text-black max-w-[30px] w-full h-full duration-[.5s] group-hover:text-white text-3xl max-sxl:text-xl"
                />
              </div>
              <span className="font-human-sansmedium text-2xl max-sxl:text-xl text-[#3a3a3a] inline-block">maevenchef@gmail.com</span>
            </a>
          </div>
          
          {/* Right Section */}
          <div className="max-w-80 w-full pt-7 justify-self-end max-ssm:justify-self-auto">
            <Link href="/weekly-meal-prep" className="flex items-center mb-6 pb-6 px-3 gap-x-4 group last-of-type:border-b-0 transnitone-anim hover:border-celadongreen border-b border-solid border-[#444444]">
              <span className="min-w-52 font-human_sansmedium transnitone-anim max-sxl:text-xl text-2xl group-hover:text-celadongreen text-black inline-block">Weekly Meal Prep</span>
              <FontAwesomeIcon 
                icon={faArrowUpRightFromSquare} 
                className="fa-solid max-w-[16px] fa-arrow-up-right-from-square text-black transnitone-anim group-hover:text-celadongreen"
                />
            </Link>
            <Link href="/maeven-athletics" className="flex items-center mb-6 pb-6 px-3 gap-x-4 group last-of-type:border-b-0 transnitone-anim hover:border-celadongreen border-b border-solid border-[#444444]">
              <span className="min-w-52 font-human_sansmedium transnitone-anim max-sxl:text-xl text-2xl group-hover:text-celadongreen text-black inline-block">Maeven Athletics</span>
              <FontAwesomeIcon 
                icon={faArrowUpRightFromSquare} 
                className="fa-solid max-w-[16px] fa-arrow-up-right-from-square text-black transnitone-anim group-hover:text-celadongreen"
                />
            </Link>
            <Link href="/dinner-parties" className="flex items-center mb-6 pb-6 px-3 gap-x-4 group last-of-type:border-b-0 transnitone-anim hover:border-celadongreen border-b border-solid border-[#444444]">
              <span className="min-w-52 font-human_sansmedium transnitone-anim max-sxl:text-xl text-2xl group-hover:text-celadongreen text-black inline-block">Dinner Parties</span>
              <FontAwesomeIcon 
                icon={faArrowUpRightFromSquare} 
                className="fa-solid max-w-[16px] fa-arrow-up-right-from-square text-black transnitone-anim group-hover:text-celadongreen"
                />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#393939] pt-12 pb-20 max-ssm:py-12">
        <div className="container">
          <div className=" grid  grid-cols-[400px_1fr_1fr_1fr]  max-xxl:grid-cols-[300px_1fr_1fr_1fr]  max-mmd:grid-cols-2 max-mmd:gap-y-14 max-ssm:gap-y-10 max-ssm:grid-cols-1 max-sxl:grid-cols-[250px_1fr_1fr_1fr] max-sxl:gap-x-16 max-xxl:gap-x-24 gap-x-40 max-2xl:gap-x-28 ">
            <div>
              <Link href="/">
              <Image
                  loading="lazy"
                  alt="footerlogo"
                  className="max-w-96 max-mmd:max-w-72 max-ssm:mx-auto w-full block"
                  src="/download.png"
                  width={300} 
                  height={100}
                />
              </Link>
              <form>
                <p className="text-white text-lg font-human-sanslight pt-14 mmd:pt-9 pb-5">Subscribe to Our Newsletter</p>
                <div className="relative">
                  <input className="w-full focus-visible:outline-none bg-transparent border border-solid pr-28   px-5 py-3 xxl:px-5  text-[#8d8d8d] text-lg font-human-sansligh border-[#7e7e7e] placeholder-grey-color" type="email" placeholder="Enter your email address" id="email" name="input_1" />
                  <button className="bg-black max-xxl:[right:inherit] max-xxl:[position:inherit]  max-xxl:[top:inherit] max-xxl:w-full max-xxl:mt-3 transnitone-anim absolute top-[5px] hover:bg-[#ffedd6] hover:text-black right-2 min-w-24 p-2 text-white text-lg   font-human_sansmedium uppercase">Send</button>
                </div>
              </form>
            </div>
            <div>
              <div>
                <div>
                  <Link href="/maeven-login" className="text-[#bcbcbc] transition-all hover:text-[#ffedd6] hover:border-[#ffedd6] font-human_sanslight text-lg border-b-2 border-dotted border-[#bcbcbc] block mb-[15px] pb-[15px] sxl:text-base max-sxl:mb-[10px] max-sxl:pb-[10px]">
                    Login
                  </Link>
                </div>
                <div>
                  <Link href="/book-a-chef/" className="text-[#bcbcbc] transition-all hover:text-[#ffedd6] hover:border-[#ffedd6] font-human_sanslight text-lg border-b-2 border-dotted border-[#bcbcbc] block pb-[15px] sxl:text-base max-sxl:mb-[10px] max-sxl:pb-[10px]">
                    Book a Chef
                  </Link>
                </div>
              </div>
              <div className="pt-10 max-sxl:pt-6">
                <h3 className="text-lg mb-5 block font-human-sanslight text-white">Follow Us</h3>
                <div className="flex gap-x-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/MaevenChef/"
                    className="group w-9 h-9 flex justify-center bg-[#ffedd6] items-center z-10 rounded-full hover:before:top-0 overflow-hidden relative before:content-[''] before:absolute before:top-full before:left-0 before:w-full before:h-full before:bg-yellowish before:z-[-1] before:duration-[.5s]"
                  >
                    <FontAwesomeIcon 
                    icon={faFacebookF} 
                    className="fa-brands max-w-[14px] fa-facebook-f duration-[.5s] group-hover:text-black group-hover:rotate-[360deg] text-black text-base"
                    />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/maevenchef/"
                    className="group w-9 h-9 flex justify-center bg-[#ffedd6] items-center z-10 rounded-full hover:before:top-0 overflow-hidden relative before:content-[''] before:absolute before:top-full before:left-0 before:w-full before:h-full before:bg-yellowish before:z-[-1] before:duration-[.5s]"
                  >
                    <FontAwesomeIcon 
                    icon={faInstagram} 
                    className="fa-brands max-w-[14px] fa-facebook-f duration-[.5s] group-hover:text-black group-hover:rotate-[360deg] text-black text-base"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div  className="menu-footer-menu-container">
                <ul className="menu">
                  <li><Link href="/weekly-meal-prep">Weekly Meal Prep</Link></li>
                  <li><Link href="/dinner-parties">Dinner Parties</Link></li>
                  <li><Link href="/maeven-athletics">Maeven Athletics</Link></li>
                  <li><Link href="/about-us">About Us</Link></li>
                </ul>
            </div>
            <div className="menu-bottom-menu-container">
              <ul className="menu">
                <li><Link href="/service-information">Service Information</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/cancellation-policy">Cancellation Policy</Link></li>
                <li><Link href="/terms-and-conditions">Terms and Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellowish py-7 max-ssm:py-4">
        <div className="container text-center">
          <p className="text-sm font-human-sansregular text-black">© Copyright 2025 Maevenchef. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
