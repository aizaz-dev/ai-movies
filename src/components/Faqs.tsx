import React, { useState } from 'react';

const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const faqData = [
    {
      id: 1,
      question: 'Muss ich eine komplette Präsentation erstellen?',
      answer:
        'Nein, Sie müssen lediglich einen kurzen Text, der aus einigen Stichpunkten besteht erstellen. Die Präsentation erstellt unsere KI Software für Sie.',
    },
    {
      id: 2,
      question: 'Muss ich ein vollständiges Drehbuch schreiben?',
      answer: 'Nein, Sie müssen lediglich einen kurzen Text, der aus einigen Stichllen. Die Präsentation edmsdmasldmsa',
    },
    {
      id: 3,
      question: 'In welchen Sprachen können Schulungsvideos erstellt werden?',
      answer: 'Nein, Sie müssen lediglich einen kurzen Text, dert erstellen. Die Präsentation edmsdmasldmsa',
    },
    {
      id: 4,
      question: 'Sind die Schulungsvideos interaktiv?',
      answer: 'Nein, Sie müssen ledinen kurzen Text, der aus einigen Stichpunkten besteht erstellen. Die Präsentation edmsdmasldmsa',
    },
    {
      id: 5,
      question: 'Wie lange dauert die Videoerstellung?',
      answer: 'Nein, Sie müssen lediglichht erstellen. Die Präsentation edmsdmasldmsa',
    }
    // Add more question-answer pairs as needed
  ];

  const handleQuestionClick = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };

  return (
    <div className='w-full bg-light100 px-[80px] py-[80px] max-tab:px-[40px] max-md:px-[30px] border-b-[1px] border-light200'>
      <div className='max-w-[2000px] m-auto'>
        <h3 className="text-lf font-[Outfit-Bold]  max-md:text-center max-laptop:text-lf">
          FAQ
        </h3>

        <div className='faq mt-7 flex max-md:flex-col mx-auto py-6'>
          <div className='one w-[50%] max-md:w-full rounded-[10px] bg-white shadow-md'>
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`question py-6 px-6 ${
                  activeQuestion === index ? 'bg-light200' : ''
                } ${index === 0 ? 'rounded-t-[10px]' : ''} ${
                  index === faqData.length - 1 ? 'rounded-b-[10px]' : ''
                } cursor-pointer`}
                onClick={() => handleQuestionClick(index)}
              >
                <p className='font-[Outfit-Bold] text-primary text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start'>
                  {faq.question}
                </p>
              </div>
            ))}
          </div>

          <div className="two p-10 w-[50%] max-md:w-full">
            {activeQuestion !== null && (
              <p className='font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start'>
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
