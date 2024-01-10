import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const Schrit = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  const steps = [
    {
      title: 'Corporate Design konfigurieren',
      description: 'Wählen Sie ihre Farben und Schriftarten aus und laden Sie Ihr Logo hoch.',
      color: 'primary',
      videoUrl: './flexvid/vid.mp4',
    },
    {
      title: 'Sie können vorhande Produktblätter, Compliance Vorschriften,',
      description:
        '… in dem Textfeld hochladen.  Zudem können Sie dort auch Ihre Prozessbeschreibungen und Stichpunkte eingeben.  Screenshots können ebenso mit eingebunden werden',
      color: 'light200',
      videoUrl: './flexvid/vid.mp4',
    },
    {
      title: 'Weitere Einstellungen konfigurieren',
      description:
        'in dem Textfeld hochladen.  Zudem können Sie dort auch Ihre Prozessbeschreibungen und Stichpunkte eingeben.  Screenshots können ebenso mit eingebunden werden',
      color: 'light200',
      videoUrl: './flexvid/vid.mp4',
    },
    {
      title: 'Video generieren',
      description:
        'in dem Textfeld hochladen.  Zudem können Sie dort auch Ihre Prozessbeschreibungen und Stichpunkte eingeben.  Screenshots können ebenso mit eingebunden werden',
      color: 'light200',
      videoUrl: './flexvid/vid.mp4',
    },
    {
      title: 'Video up-to-date halten',
      description:
        'in dem Textfeld hochladen.  Zudem können Sie dort auch Ihre Prozessbeschreibungen und Stichpunkte eingeben.  Screenshots können ebenso mit eingebunden werden',
      color: 'light200',
      videoUrl: './flexvid/vid.mp4',
    },
  ];

  const handleStepClick = (index) => {
    setSelectedStep(index);
  };

  return (
    <div className='w-full bg-light100 mt-[50px] px-[80px] max-laptop:px-[60px] max-md:px-[30px]'>
      <div className='webapp max-w-[2000px] m-auto px-[60px] max-md:px-0'>
        <div className='greyblock mt-[20px] w-full flex max-tab:flex-col max-tab:items-center max-md:py-6 gap-[20px] py-[40px] max-md:p-0 rounded-[10px]'>
          <div className='left w-[40%] max-tab:w-full flex justify-start items-start gap-2'>
            <div className='iconbox flex flex-col justify-start items-center w-[80px] gap-2 -ml-[38px] max-md:ml-2'>
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`ico w-[79px] h-[79px] max-laptop:w-[60px] max-laptop:h-[60px] rounded-[50%] bg-${
                      index === selectedStep ? 'primary' : step.color
                    } text-light400 flex items-center justify-center text-lg p-4 font-bold`}
                    onClick={() => handleStepClick(index)}
                    style={{ opacity: selectedStep === index ? 1 : 0.5 }}
                  >
                    <FaCheck />
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`line w-[2px] ${
                        index === selectedStep
                          ? 'h-[180px] max-md:h-[85px] max-laptop:h-[80px]'
                          : 'h-[46px] max-laptop:h-[30px]'
                      } bg-${
                        index === selectedStep ? 'primary' : step.color
                      }`}
                    ></div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className='desc p-4 pt-0 flex items-start justify-start flex-col gap-14 max-md:gap-10 max-laptop:gap-[50px]' >
              {steps.map((step, index) => (
                <div
                  key={index}
                  className='first'
                  onClick={() => handleStepClick(index)}
                  style={{ opacity: selectedStep === index ? 1 : 0.5 }}
                >
                  <h3 className={`text-sm font-[Outfit-Bold] text-${step.color} max-md:text-mf max-laptop:text-mf`}>
                    SCHRITT {index + 1}
                  </h3>
                  <h4
                    className={`text-sm font-[Outfit-Bold] max-md:text-mf max-laptop:text-mf max-laptop:leading-[25px]`}
                  >
                    {step.title}
                  </h4>
                  {selectedStep === index && (
                    <p
                      className='text-sm font-[Outfit-Regular] max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5'
                    >
                      {step.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className='right w-[55%] h-full flex flex-col items-end max-md:items-center'>
            <div className='vid max-tab:hidden'>
              <video
                className='w-[100%] h-[600px] max-laptop:h-[400px] object-cover rounded-[10px]'
                src={steps[selectedStep].videoUrl}
                muted
                autoPlay
                loop
              ></video>
            </div>
            <div className='button '>
              <button className='text-primary text-sm font-[Outfit-Bold] max-laptop:text-mf font-bold border-[2px] border-solid border-primary py-[10px] px-[15px] rounded-[10px] mt-6 max-md:text-[14px] whitespace-nowrap max-md:mx-auto'>
                Demovideo kostenlos erstellen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schrit;
