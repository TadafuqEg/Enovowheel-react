import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatedSection } from '../components/AnimatedSection';

const faqData = [
  {
    question: "What we do?",
    answer:
      "At Tadsfux, we craft user-focused web designs, develop robust websites, and build impactful brand identities. Our mission is to empower businesses with innovative digital solutions that drive growth.",
  },{
    question: "What we do?",
    answer:
      "At Tadsfux, we craft user-focused web designs, develop robust websites, and build impactful brand identities. Our mission is to empower businesses with innovative digital solutions that drive growth.",
  },{
    question: "What we do?",
    answer:
      "At Tadsfux, we craft user-focused web designs, develop robust websites, and build impactful brand identities. Our mission is to empower businesses with innovative digital solutions that drive growth.",
  },{
    question: "What we do?",
    answer:
      "At Tadsfux, we craft user-focused web designs, develop robust websites, and build impactful brand identities. Our mission is to empower businesses with innovative digital solutions that drive growth.",
  },{
    question: "What we do?",
    answer:
      "At Tadsfux, we craft user-focused web designs, develop robust websites, and build impactful brand identities. Our mission is to empower businesses with innovative digital solutions that drive growth.",
  },
  {
    question: "What we do?",
    answer:
      "At Tadsfux, we craft user-focused web designs, develop robust websites, and build impactful brand identities. Our mission is to empower businesses with innovative digital solutions that drive growth.",
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <AnimatedSection>
      <h5>FAQ</h5>
      </AnimatedSection>
      <AnimatedSection>
      <p>
      At Tadafuq, we are a forward-thinking digital agency dedicated to crafting innovative solutions in web design, development, and branding. Our mission is to empower businesses with impactful digital experiences that drive growth and success. With creativity and expertise, we turn ideas into reality.
      </p>
      </AnimatedSection>
      <AnimatedSection>
      <div className="pagg">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-700">
            <button
              className="faq-btn w-full flex justify-between items-center py-4 text-lg font-semibold focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="faq-h">0{index + 1} | {faq.question}</span>
              {openIndex === index ? (
                <div className="x"> <ChevronUp className="w-5 h-5" /> </div>
              ) : (
                <div className="xx"><ChevronDown className="w-5 h-5" /></div>
              )}
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="faq-pp"
              >
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
      </AnimatedSection>
    </div>
  );
}
