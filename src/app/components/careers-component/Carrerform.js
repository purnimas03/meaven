"use client";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    file: null,
  });
  const [fileName, setFileName] = useState("");
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    file: "",
    recaptcha: "", // Add this line
    submission: "", // For submission errors
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); 
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, file }));
    setFileName(file ? file.name : "");
    setErrors((prev) => ({ ...prev, file: "" })); 
  };

  const validate = () => {
    const newErrors = {};

    // Basic required checks
    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required.";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    if (!formData.file) newErrors.file = "File upload is required.";

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) 
      {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    // Phone validation (sanitize and check)
    const digitsOnly = formData.phone.replace(/\D/g, ""); // keep only digits

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required.";
    } else if (digitsOnly.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    // Validate all fields except reCAPTCHA first
    const isValid = validate();
    
    // Check if reCAPTCHA is completed
    if (!recaptchaToken) {
      setErrors((prev) => ({
        ...prev,
        recaptcha: "Please complete the reCAPTCHA.",
      }));
      return; 
    }

    if (!isValid) {
      return; 
    }

    setIsSubmitting(true);

    // Verify reCAPTCHA
    try {
      const verificationResponse = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ recaptchaToken }),
      });

      if (!verificationResponse.ok) {
        const result = await verificationResponse.json();
        setErrors((prev) => ({
          ...prev,
          recaptcha: "reCAPTCHA verification failed: " + result.message,
        }));
        setIsSubmitting(false);
        return;
      }

      // Proceed with form submission only if reCAPTCHA is verified
      const data = new FormData();
      data.append("input_1", formData.firstName);
      data.append("input_3", formData.lastName);
      data.append("input_4", formData.email);
      data.append("input_5", formData.phone);
      data.append("input_6", formData.subject);
      data.append("input_7", formData.message);
      if (formData.file) {
        data.append("input_8", formData.file);
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API}/gf/v2/forms/1/submissions`, {
        method: "POST",
        headers: {
          "Authorization": "Bearer YOUR_ACCESS_TOKEN",
        },
        body: data,
      });

      const result = await res.json();
      if (res.ok) {
        // Reset form and state on successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          file: null,
        });
        setFileName("");
        setErrors({});
        setRecaptchaToken(null); // Reset reCAPTCHA token
      } else {
        setErrors((prev) => ({
          ...prev,
          submission: "Submission failed: " + (result.message || "Unknown error"),
        }));
      }
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        submission: "Error submitting form: " + error.message,
      }));
    } 
    finally {
      setIsSubmitting(false);
    }
  };



  return (
    <section className="bg-teal-700 getintouch careers-form">
      <div className="">
        <div className="grid grid-cols-[40%_1fr] max-ssm:grid-cols-1 gap-x-24 max-sxl:gap-x-16 max-sxl:grid-cols-2 max-mmmd:gap-x-0">
          {/* LEFT SECTION unchanged */}
          <div className="relative before:absolute before:w-full before:h-full before:bg-[rgba(0,0,0,0.9)] before:z-10 before:top-0 before:left-0 before:bottom-0 before:right-0">
            <img
              alt="Chef preparing a dish"
              className="absolute w-full h-full object-cover"
              src="/shutterstock_2367469447-scaled.jpg"
            />
            <div className="relative contentwrap z-20  bg-opacity-50 py-24 max-ssm:py-16 px-3 h-full">
              <h3 className="text-[50px] leading-[60px] max-sxl:text-4xl text-white mb-5 font-source-serif-prolight">How to Become a Meaven Chef</h3>
              <div className="space-y-8 pt-8 max-sxx:py-4">
                {[
                  "Submit a resume: Showcase your culinary skills, experience, and certifications.",
                  "Profile creation: Showcase your culinary skills, experience, and certifications",
                  "Screening: Our team will review your application and conduct a screening process",
                  "Onboarding: Attend an orientation session and receive your chef kit",
                  "Start cooking: Begin accepting client requests and sharing your"
                ].map((step, index) => (
                  <div key={index} className="flex group gap-x-5 items-start">
                    <div className="bg-yellowish border-2 border-solid border-black shadow-custombtn px-[15px] py-[6px] z-10 group-hover:before:top-0 overflow-hidden relative before:content-[''] before:absolute before:top-full before:left-0 before:w-full before:h-full before:bg-[#178b77] before:z-[-1] before:duration-[.5s]">
                      <span className="text-black duration-[.5s] group-hover:text-white leading-[24px] font-human-sanslight text-2xl max-sxl:text-xl">{index + 1}</span>
                    </div>
                    <p className="text-white font-human-sanslight text-lg">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SECTION FORM */}
          <div className="py-24 max-ssm:py-16 px-3 max-w-[800px] w-full content">
            <h3 className="text-[50px] leading-[60px] max-sxl:text-4xl text-white mb-5 font-source-serif-prolight">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`px-3 py-3 focus:outline-none font-human-sansregular text-[15px] bg-white text-black placeholder:text-[#333333] border w-full ${
                      errors.firstName ? "border-red-500" : "border-[#4f988d]"
                    }`}
                    required
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name*"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`px-3 py-3 focus:outline-none font-human-sansregular text-[15px] bg-white text-black placeholder:text-[#333333] border w-full ${
                      errors.lastName ? "border-red-500" : "border-[#4f988d]"
                    }`}
                    required
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    className={`px-3 py-3 focus:outline-none font-human-sansregular text-[15px] bg-white text-black placeholder:text-[#333333] border w-full ${
                      errors.email ? "border-red-500" : "border-[#4f988d]"
                    }`}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone*"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`px-3 py-3 focus:outline-none font-human-sansregular text-[15px] bg-white text-black placeholder:text-[#333333] border w-full ${
                      errors.phone ? "border-red-500" : "border-[#4f988d]"
                    }`}
                    required
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="mb-4 flex flex-col">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject*"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`px-3 py-3 focus:outline-none font-human-sansregular text-[15px] bg-white text-black placeholder:text-[#333333] border w-full ${
                    errors.subject ? "border-red-500" : "border-[#4f988d]"
                  }`}
                  required
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div className="mb-4 flex flex-col">
                <textarea
                  name="message"
                  placeholder="Message*"
                  value={formData.message}
                  onChange={handleChange}
                  className={`px-3 py-3 focus:outline-none font-human-sansregular text-[15px] bg-white text-black placeholder:text-[#333333] border w-full h-32 ${
                    errors.message ? "border-red-500" : "border-[#4f988d]"
                  }`}
                  required
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <div className="border-2 h-24 cursor-pointer border-dashed border-[#81b7ae] p-4 rounded flex flex-col items-center justify-center">
                <input
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                  className="hidden"
                  id="fileUpload"
                />
                <label
                  htmlFor="fileUpload"
                  className={`font-human-sansregular text-[15px] cursor-pointer ${
                    errors.file ? "text-red-500" : "text-white"
                  }`}
                >
                  {fileName || "Choose File or Drop Here"}
                </label>
                {errors.file && (
                  <p className="text-red-500 text-sm mt-1">{errors.file}</p>
                )}
              </div>

              {/* Google reCAPTCHA */}
              <div className="mt-4">
                <ReCAPTCHA
                  sitekey="6LeSSlsrAAAAAAWccoHcDTapiYa1a7TlqehnlJ7D" // Replace with your site key
                  onChange={(token) => {
                    setRecaptchaToken(token);
                    setErrors((prev) => ({ ...prev, recaptcha: "" })); // Clear error on token change
                  }}
                  onExpired={() => setRecaptchaToken(null)} // Reset token if expired
                />
                {errors.recaptcha && (
                  <p className="text-red-500 text-sm mt-1">{errors.recaptcha}</p>
                )}
              </div>


              <button
                type="submit"
                className="group min-w-[170px] mt-6 block max-w-fit"
                disabled={isSubmitting}
              >
                <div className="bg-yellowish border-2 border-solid border-black shadow-custombtn px-5 py-[10px] z-10 group-hover:before:top-0 overflow-hidden relative before:content-[''] before:absolute before:top-full before:left-0 before:w-full before:h-full before:bg-[#178b77] before:z-[-1] before:duration-[.5s]">
                  <span className="inline-block text-black group-hover:text-white font-human-sansregular text-[15px] leading-4">
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </span>
                </div>
              </button>

              {/* Display submission errors */}
              {errors.submission && (
                <p className="text-red-500 text-sm mt-1">{errors.submission}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerForm;