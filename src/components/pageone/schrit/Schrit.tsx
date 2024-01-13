import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCheck } from "react-icons/fa";

// Schrit component
const Schrit = () => {
  // Accessing translation function and managing active step state
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);

  // Array of steps with details
  const steps = [
    {
      schrit: "Schrit1",
      title: `${t("Schrit.Step1Title")}`,
      description: `${t("Schrit.Step1Description")}`,
      color: "primary",
      videoUrl: "./flexvid/vid.mp4",
    },
    {
      schrit: "Schrit2",
      title: `${t("Schrit.Step2Title")}`,
      description: `${t("Schrit.Step2Description")}`,
      color: "primary",
      videoUrl: "./flexvid/vid.mp4",
    },
    {
      schrit: "Schrit3",
      title: `${t("Schrit.Step3Title")}`,
      description: `${t("Schrit.Step3Description")}`,
      color: "primary",
      videoUrl: "./flexvid/vid.mp4",
    },
    {
      schrit: "Schrit4",
      title: `${t("Schrit.Step4Title")}`,
      description: `${t("Schrit.Step4Description")}`,
      color: "primary",
      videoUrl: "./flexvid/vid.mp4",
    },
    {
      schrit: "Schrit5",
      title: `${t("Schrit.Step5Title")}`,
      description: `${t("Schrit.Step5Description")}`,
      color: "primary",
      videoUrl: "./flexvid/vid.mp4",
    },
  ];

  // Function to handle step click
  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  // Rendering the Schrit component
  return (
    <div className="w-full bg-light100 mt-[50px] px-[80px] max-laptop:px-[60px] max-md:px-[30px]">
      <div className="webapp max-w-[2000px] m-auto px-[60px] max-tab:px-0 max-md:px-0">
        <div className="greyblock mt-[20px] w-full flex max-tab:flex-col max-tab:items-center max-md:py-6 gap-[20px] py-[40px] max-md:p-0 rounded-[10px]">
          <div className="left w-[40%] max-tab:w-full flex justify-start items-start gap-2">
            <div className="eft flex flex-col gap-[10px] items-start">
              {/* Loop through each step */}
              {steps.map((step, index) => (
                <div
                  className={`one ${
                    index === activeStep ? "active" : "inactive"
                  } schritt${index + 1}`}
                  key={index}
                  onClick={() => handleStepClick(index)}
                >
                  <div className="box flex">
                    {/* Step icon and lines */}
                    <div className="flex flex-col gap-[10px] justify-start items-center">
                      <div
                        className={`icon bg-${
                          step.color
                        } w-[70px] h-[70px] rounded-[50%] flex items-center justify-center text-white ${
                          index === activeStep ? "opacity-100" : "opacity-50"
                        }`}
                      >
                        <FaCheck size={40} />
                      </div>
                      {index !== steps.length - 1 && (
                        <div
                          className={`line w-[2px] min-h-[50px] flex-1 bg-${
                            step.color
                          } ${
                            index === activeStep ? "opacity-100" : "opacity-50"
                          }`}
                        ></div>
                      )}
                    </div>
                    {/* Step title, description, and content */}
                    <div className="ml-7 pb-[30px]">
                      <h3
                        className={`text-sm font-[Outfit-Bold] max-md:text-mf max-laptop:text-mf text-primary ${
                          index === activeStep ? "opacity-100" : "opacity-50"
                        }`}
                      >
                        {step.schrit}
                      </h3>
                      <h3
                        className={`text-sm font-[Outfit-Bold] max-md:text-mf max-laptop:text-mf ${
                          index === activeStep ? "opacity-100" : "opacity-50"
                        }`}
                      >
                        {step.title}
                      </h3>
                      {index === activeStep && (
                        <p
                          className={`text-sm font-[Outfit-Regular] max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 ${
                            index === activeStep ? "opacity-100" : "opacity-50"
                          }`}
                        >
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Video and button on the right */}
          <div className="right w-[55%]  h-full flex flex-col items-end max-md:items-center">
            <div className="vid max-tab:hidden">
              <video
                className="w-[100%] h-[600px] max-laptop:h-[400px] object-cover rounded-[10px]"
                src={steps[activeStep].videoUrl}
                muted
                autoPlay
                loop
              ></video>
            </div>
            <div className="button ">
              <button className="text-primary text-sm font-[Outfit-Bold] max-laptop:text-mf font-bold border-[2px] border-solid border-primary py-[10px] px-[15px] rounded-[10px] mt-6 max-md:text-[14px] whitespace-nowrap max-md:mx-auto">
                {t("Schrit.createFreeDemoVideo")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the Schrit component
export default Schrit;
