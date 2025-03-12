import { useState } from "react";

const faqs = [
  {
    question: "What is the system?",
    answer:
      "Our system is designed to combat corruption in infrastructure management. It streamlines issue reporting, cost estimation, and fund allocation. This ensures transparency and accountability throughout the project lifecycle.",
  },
  {
    question: "How does it work?",
    answer:
      "The system utilizes AI to analyze data and provide accurate cost estimates. It also facilitates worker assignments and milestone-based payments. This integrated approach enhances project efficiency and reduces corruption risks.",
  },
  {
    question: "Is it user-friendly?",
    answer:
      "Yes, our platform is designed with the user in mind. It features an intuitive interface that simplifies navigation and reporting. Training resources are also available to assist new users.",
  },
  {
    question: "What support is offered?",
    answer:
      "We provide comprehensive support, including technical assistance and user training. Our team is available to answer questions and resolve issues promptly. Additionally, we offer regular updates to enhance system functionality.",
  },
  {
    question: "How secure is it?",
    answer:
      "Security is a top priority for us. The system employs advanced encryption and access controls to protect sensitive data. Regular security audits ensure that we maintain the highest standards of data integrity.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 ">
      <h2 className="text-3xl font-bold dark:text-white">FAQs</h2>
      <p className="text-gray-600 mt-2 dark:text-white">
        Discover answers to your most pressing questions about our
        anti-corruption management system.
      </p>

      <div className="mt-6 border-t border-gray-300">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left py-4 flex justify-between items-center font-semibold text-lg dark:text-white"
            >
              {faq.question}
              <span>
                {openIndex === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                )}
              </span>
            </button>
            {openIndex === index && (
              <p className="text-gray-600 pb-4 dark:text-white">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-12">
        <h3 className="text-xl font-bold dark:text-white">
          Still have questions?
        </h3>
        <p className="text-gray-600 mt-2 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="mt-4 px-6 py-2 border border-black text-black rounded hover:bg-primary/90 hover:text-white dark:text-white rounded dark:border-white dark:hover:bg-white dark:hover:text-blue-900">
          Contact
        </button>
      </div>
    </div>
  );
};

export default FAQ;
