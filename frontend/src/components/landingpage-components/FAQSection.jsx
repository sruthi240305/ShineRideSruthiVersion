import React, { useState } from 'react';

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope and complexity. Most projects are completed within 4–12 weeks.",
  },
  {
    question: "What are your support hours?",
    answer: "Our support team is available Monday to Friday, 9 AM to 6 PM (IST).",
  },
  {
    question: "Do you offer custom integrations?",
    answer: "Yes, we can build custom APIs and integrations for your existing systems.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-black text-white py-24 px-6 md:px-20 text-center">
      {/* Subtitle */}
      <p className="text-purple-400 font-medium mb-3">Support</p>

      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Got Questions? We’ve Got Answers!
      </h2>

      {/* Description */}
      <p className="text-gray-400 max-w-[700px] mx-auto mb-16">
        We’ve gathered all the answers you’re looking for, neatly organized just for you.
      </p>

      {/* FAQ List */}
      <div className="max-w-[800px] mx-auto text-left space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="border-b border-white/10 pb-4">
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex justify-between items-center py-4 text-lg font-medium transition-colors hover:text-purple-400"
              >
                <span>{faq.question}</span>
                <span className="text-purple-400 text-2xl">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {/* Smooth accordion animation */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="text-gray-400 pb-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
