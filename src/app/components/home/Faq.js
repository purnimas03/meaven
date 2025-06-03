import { motion } from 'framer-motion';


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-24">
      <h2 className=" text-[50px] max-sxl:text-4xl text-center  text-black  mb-8  font-source-serif-prolight">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {fetchedFaqs.map((faq, index) => (
          <div key={index} className=" rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full rounded-[8px] max-ssm:items-start flex justify-between items-center p-4 bg-[#ebebe5] group transition-anim hover:bg-[#178b77]"
            >
              <span className="text-lg max-ssm:text-left  font-source-serif-prolight group-hover:text-white text-black transition-anim">{faq.title}</span>
              <span className="text-lg transition-anim text-black group-hover:text-white">{openIndex === index ? '−' : '+'}</span>
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="p-4 text-gray-700">{faq.content}</div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
