import React, { useState } from "react";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface FaqProps {
  question: string;
  answer: string;
}

const Faq: React.FC<FaqProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-b border-muted-color/20 last:border-0 transition-all duration-300 "
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="py-6 px-4 cursor-pointer group">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold font-comic text-left group-hover:text-accent-color transition-colors duration-200">
            {question}
          </h3>
          <span className="text-accent-color text-2xl">
            {isOpen ? (
              <FiChevronUp className="transform transition-transform duration-300" />
            ) : (
              <FiChevronDown className="transform transition-transform duration-300" />
            )}
          </span>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <p className="text-muted-color pb-4 font-comic">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
