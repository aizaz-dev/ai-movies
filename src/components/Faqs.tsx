import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation();

  const [activeQuestion, setActiveQuestion] = useState(0);

  const faqData = [
    {
      id: 1,
      question: `${t("faq.faq1.question")}`,
      answer: `${t("faq.faq1.answer")}`,
    },
    {
      id: 2,
      question: `${t("faq.faq2.question")}`,
      answer: `${t("faq.faq2.answer")}`,
    },
    {
      id: 3,
      question: `${t("faq.faq3.question")}`,
      answer: `${t("faq.faq3.answer")}`,
    },
    {
      id: 4,
      question: `${t("faq.faq4.question")}`,
      answer: `${t("faq.faq4.answer")}`,
    },
    {
      id: 5,
      question: `${t("faq.faq5.question")}`,
      answer: `${t("faq.faq5.answer")}`,
    },
    // Add more question-answer pairs as needed
  ];

  const handleQuestionClick = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };

  return (
    <div className="w-full bg-light100 px-[80px] py-[80px] max-tab:px-[40px] max-md:px-[30px] ">
      <div className="max-w-[2000px] m-auto">
        <h3 className="text-lf font-[Outfit-Bold]  max-md:text-center max-laptop:text-lf">
          {t("faq.faqHeading")}
        </h3>

        <div className="faq mt-7 flex max-md:flex-col mx-auto py-6">
          <div className="one w-[50%] max-md:w-full rounded-[10px] bg-light400 shadow-md">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`question py-6 px-6 ${
                  activeQuestion === index ? "bg-light200" : ""
                } ${index === 0 ? "rounded-t-[10px]" : ""} ${
                  index === faqData.length - 1 ? "rounded-b-[10px]" : ""
                } cursor-pointer`}
                onClick={() => handleQuestionClick(index)}
              >
                <p className="font-[Outfit-Bold] text-primary text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                  {faq.question}
                </p>
              </div>
            ))}
          </div>

          <div className="two p-10 w-[50%] max-md:w-full">
            {activeQuestion !== null && (
              <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                {faqData[activeQuestion].answer}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
