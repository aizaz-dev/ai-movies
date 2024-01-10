// Webapp.jsx
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Webapp = () => {
  const steps = [
    {
      number: 1,
      title: "Corporate Design konfigurieren",
      description:
        "Wählen Sie ihre Farben und Schriftarten aus und laden Sie Ihr Logo hoch.",
      videoSrc: "./flexvid/vid.mp4", // Video source for step 1
    },
    {
      number: 2,
      title: "Sie können vorhande Produktblätter, Compliance Vorschriften,",
      description:
        "Zudem können Sie dort auch Ihre Prozessbeschreibungen und Stichpunkte eingeben. ",
      videoSrc: "./flexvid/vid.mp4", // Video source for step 2
    },
    {
      number: 3,
      title: "Weitere Einstellungen konfigurieren",
      description:
        "Wählen Sie Ihre bevorzugten Audio Einstellungen, Exportformate, Features sowie Ihr bevorzugtes Template aus",
      videoSrc: "./flexvid/vid.mp4", // Video source for step 3
    },
    {
      number: 4,
      title: "Video generieren",
      description:
        "Das Video wird im Nachgang von unserer KI-Software automatisiert generiert. Nach Fertigstellungen bekommen Sie einen Download Link per Mail zugesendet",
      videoSrc: "./flexvid/vid.mp4", // Video source for step 4
    },
    {
      number: 5,
      title: "Video up-to-date halten",
      description:
        "Sie können im Nachgang per Editor einfach das E-Learning aktualiseren. Ändern Sie lediglich entsprechende Textpassagen ",
      videoSrc: "./flexvid/vid.mp4", // Video source for step 5
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [lineHeight, setLineHeight] = useState(74); // Default line height for all steps
  const [lineOffset, setLineOffset] = useState(0); // Offset for Schritt5 line alignment
  const [dynamicGap, setDynamicGap] = useState(10); // Dynamic gap between circles
  const [videoSrc, setVideoSrc] = useState(steps[0].videoSrc); // Initial video source

  const handleStepClick = (index) => {
    setActiveStep(index);

    // Get the height of the content of the selected step
    const contentHeight = document.getElementById(`step-${index}`)?.offsetHeight;

    // Set the lineHeight to the height of the content for the fourth and fifth steps, otherwise use the default height
    setLineHeight(contentHeight || 74);

    // Set the lineOffset for Schritt5 alignment
    if (index === 4) {
      // Adjust the offset for Schritt5
      setLineOffset((74 - contentHeight) / 2 + 10); // You can adjust the offset value as needed
    } else {
      setLineOffset(0);
    }

    // Set a constant dynamic gap between circles
    setDynamicGap(10);

    // Set the video source for the clicked step
    setVideoSrc(steps[index].videoSrc);
  };

  return (
    <div className='w-full bg-light100 mt-[50px] p-[80px] max-laptop:p-[60px] max-md:p-[30px] '>
      <div className='webapp max-w-[2000px] m-auto px-[60px] max-md:px-0'>
        <h3 className='text-sm font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf'>WEBAPP</h3>
        <h1 className='text-lg font-[Outfit-Bold] max-md:text-sm max-md:text-center max-laptop:text-lf '>Flexible Videoerstellung <br className='hidden max-laptop:hidden '/> und Bearbeitung</h1>
        <div className='greyblock mt-[20px] w-full bg-light100 flex max-tab:flex-col max-tab:items-center max-md:py-6 gap-[20px] py-[40px] max-md:p-0 rounded-[10px]'>
          <div className="left w-[40%] max-tab:w-full flex justify-start items-start gap-2">
            <div className="iconbox flex flex-col justify-center items-center w-[80px] gap-2 -ml-[38px] max-md:ml-2">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`ico w-[79px] h-[79px] max-laptop:w-[60px] max-laptop:h-[60px] rounded-[50%] bg-${index === activeStep ? 'primary' : 'light200'} text-white flex items-center justify-center text-lg p-4 font-bold`}
                    onClick={() => handleStepClick(index)}
                  >
                    <FaCheck />
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`line w-[2px] h-[${lineHeight}px] max-laptop:h-[${lineHeight}px] bg-${index === activeStep ? 'primary' : 'light200'}`}
                      style={{ marginTop: `${dynamicGap}px` }}
                    ></div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="desc p-4 pt-0 flex items-start justify-start flex-col gap-[67px] max-tab:gap-[100px] max-md:gap-[64px] max-laptop:gap-[90px]">
              {steps.map((step, index) => (
                <div
                  className={`first cursor-pointer ${index === activeStep ? 'active' : ''}`}
                  key={index}
                  onClick={() => handleStepClick(index)}
                >
                  <h3 className={`text-sm font-[Outfit-Bold] text-${index === activeStep ? 'primary' : 'light200'} max-md:text-mf max-laptop:text-mf`}>SCHRITT {step.number}</h3>
                  <h4 className={`text-sm font-[Outfit-Bold] text-${index === activeStep ? 'light300' : 'light200'} max-md:text-mf max-laptop:text-mf max-laptop:leading-[25px]`}>{step.title}</h4>
                  {index === activeStep && (
                    <p
                      id={`step-${index}`}
                      className={`text-sm font-[Outfit-Regular] max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5`}
                    >
                      {step.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="right w-[55%] h-full flex flex-col items-end max-md:items-center">
            <div className="vid max-tab:hidden">
              <video className='w-[100%] h-[600px] max-laptop:h-[400px] object-cover rounded-[10px]' src={videoSrc} muted autoPlay loop></video>
            </div>
            <div className={`button ${activeStep === 4 ? 'move-up' : ''}`}>
              <button
                className='text-primary text-sm font-[Outfit-Bold] max-laptop:text-mf font-bold border-[2px] border-solid border-primary py-[10px] px-[15px] rounded-[10px] mt-6 max-md:text-[14px] whitespace-nowrap max-md:mx-auto'
                onClick={() => handleButtonClick()}
              >
                Demovideo kostenlos erstellen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webapp;
