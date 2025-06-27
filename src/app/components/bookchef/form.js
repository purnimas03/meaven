"use client";
import { useEffect, useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { fetchFromAPI } from "../../../../lib/fetchapi";

const StaticMultiStepForm = () => {
  const [step, setStep] = useState(1);

  // Step 1 state
  const [foodPreference, setFoodPreference] = useState("");
  const [portions, setPortions] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);
  const [step1Error, setStep1Error] = useState("");

  const goNext = () => setStep(prev => Math.min(prev + 1, 4));
  const goPrev = () => setStep(prev => Math.max(prev - 1, 1));

  const handleDayToggle = day => {
    setSelectedDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetchFromAPI("/custom/v1/weak-categories");
      setCategories(response);
    };
    fetchCategories();
  }, []);

  const validateStep1 = () => {
    if (!foodPreference || !portions || selectedDays.length === 0) {
      setStep1Error("Please select all required fields before proceeding.");
      return;
    }
    setStep1Error("");
    goNext();
  };

  return (
    <div className="bg-[#ebebe6] py-24">
      <div className="container">
        <form id="formbookachef">
          {/* Step 1: Preferences */}
          {step === 1 && (
            <div className="bg-white py-16 px-4 rounded-[10px] mx-5 max-ssm:mx-0">
              <h3 className="text-[50px] text-black text-center mb-5 font-source-serif-prolight">Book a Chef</h3>
              <div className="grid grid-cols-2 max-ssm:grid-cols-1 gap-x-24 max-ssm:gap-x-0">
                <div>
                  <label className="text-3xl block text-black text-center mb-5 font-source-serif-prolight">Choose Your Preferences</label>
                  <div className="flex pt-10 flex-wrap items-center gap-x-12 gap-y-10 justify-center">
                    {categories.map(({ id, name }) => (
                      <span key={id} className="checkbox-wrap big max-mmmd:w-full">
                        <input
                          className="hidden"
                          id={`category-${id}`}
                          type="radio"
                          name="foodPreference"
                          value={name}
                          onChange={() => setFoodPreference(name)}
                          checked={foodPreference === name}
                        />
                        <label
                          htmlFor={`category-${id}`}
                          className={`bg-[#f5f5f7] relative min-w-[280px] cursor-pointer text-xl py-[14px] text-black block text-center px-2 border-2 border-black hover:bg-[#fedb00] transition-all ${
                            foodPreference === name ? "bg-[#fedb00]" : ""
                          }`}
                        >
                          <Image alt={`${name} icon`} width={60} height={60} src="/food.png" className="max-w-[70px] h-[70px] mb-4 mx-auto object-contain" />
                          {name}
                          <div className="hidden iconcheckbig">
                            <FontAwesomeIcon icon={faCheck} />
                          </div>
                        </label>
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="no_of_portion" className="text-3xl block text-black text-center mb-5 font-source-serif-prolight">No. of Portions</label>
                  <select
                    id="no_of_portion"
                    value={portions}
                    onChange={e => setPortions(e.target.value)}
                    className="bg-[#f5f5f7] max-w-[524px] mx-auto py-2 px-5 text-2xl text-black border-2 border-black w-full"
                  >
                    <option value="">Select number of Portions</option>
                    {[1, 2, 3, 4, 5].map(num => <option key={num} value={num}>{num}</option>)}
                  </select>

                  <label className="text-3xl block text-black text-center mt-10 mb-3 font-source-serif-prolight">Meals Per Week</label>
                  <div className="flex flex-wrap pt-10 gap-x-4 gap-y-4 justify-center items-center">
                    {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(day => (
                      <span key={day} className="checkbox-wrap">
                        <input
                          className="hidden"
                          id={`check${day}`}
                          type="checkbox"
                          value={day}
                          checked={selectedDays.includes(day)}
                          onChange={() => handleDayToggle(day)}
                        />
                        <label
                          htmlFor={`check${day}`}
                          className={`bg-[#f5f5f7] relative min-w-[121px] text-xl py-[14px] px-2 text-black block text-center border-2 border-black cursor-pointer hover:bg-[#fedb00] ${
                            selectedDays.includes(day) ? "bg-[#fedb00]" : ""
                          }`}
                        >
                          {day}
                          <div className="hidden iconcheck">
                            <FontAwesomeIcon icon={faCheck} />
                          </div>
                        </label>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {step1Error && (
                <p className="text-center text-red-600 pt-6">{step1Error}</p>
              )}

              <div className="text-center pt-14">
                <button type="button" onClick={validateStep1} className="bg-yellowish border-2 border-black px-6 py-3 uppercase font-bold">
                  Proceed to Next
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Add Dishes to Basket */}
          {step === 2 && (
            <div className="bg-white py-16 px-5 rounded-[10px] mx-5">
              <h3 className="text-[50px] text-black mb-5 text-center font-source-serif-prolight">Add Dishes to Basket</h3>
              <div className="border-b max-w-[1050px] mx-auto pt-10 pb-[70px] grid grid-cols-2 max-mmmd:grid-cols-1 gap-y-7">
                {[1, 2].map(i => (
                  <div key={i} className="grid grid-cols-[140px_1fr] items-center gap-x-7 gap-y-6">
                    <Image alt="Dish" height={115} width={140} src="/AAA_0964.jpg" className="h-[115px] w-full object-cover rounded-[5px]" />
                    <div className="flex flex-col">
                      <span className="text-xl text-black text-center font-human-sansregular">Dish Name Here</span>
                      <Link className="underline mt-4 font-human-sanslight text-center text-base text-[#ff0000]" href="/">Add to Basket</Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-10 max-ssm:flex-col-reverse max-ssm:gap-6">
                <button type="button" onClick={goPrev} className="bg-yellowish border-2 border-black px-6 py-3 uppercase font-bold">Previous</button>
                <button type="button" onClick={goNext} className="bg-yellowish border-2 border-black px-6 py-3 uppercase font-bold">Confirm</button>
              </div>
            </div>
          )}

          {/* Step 3: Checkout (unchanged) */}
          {step === 3 && (
            <div className="bg-white py-16 px-5 rounded-[10px] mx-5">
              {/* KEEP YOUR ORIGINAL CHECKOUT SECTION CODE HERE */}
              <div className="max-w-[1263px] mx-auto">
                <h3 className="text-[50px] max-sxl:text-4xl text-black mb-5 font-source-serif-prolight">Checkout</h3>
                {/* ... all original checkout content ... */}
              </div>
              <div className="flex justify-between mt-10 max-ssm:flex-col-reverse max-ssm:gap-6">
                <button type="button" onClick={goPrev} className="bg-yellowish border-2 border-black px-6 py-3 uppercase font-bold">Previous</button>
                <button type="button" onClick={goNext} className="bg-yellowish border-2 border-black px-6 py-3 uppercase font-bold">Submit</button>
              </div>
            </div>
          )}

          {/* Step 4: Payment */}
          {step === 4 && (
            <div className="bg-white py-16 px-5 rounded-[10px] mx-5 text-center">
              <h3 className="text-[50px] text-black mb-5">Payment</h3>
              <label className="text-3xl font-medium text-black">Pay $100 to confirm your Chef booking.</label>
              <div className="mt-10">
                <div id="payment-element">[Stripe Payment Element]</div>
              </div>
              <div className="flex justify-between mt-10">
                <button type="button" onClick={goPrev} className="bg-yellowish border-2 border-black px-6 py-3 uppercase font-bold">Previous</button>
                <button type="submit" className="bg-yellowish border-2 border-black px-6 py-3 uppercase font-bold">Submit</button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default StaticMultiStepForm;
