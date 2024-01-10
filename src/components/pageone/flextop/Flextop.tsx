import React from "react";
import { useTranslation } from "react-i18next";

const Flextop = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="w-full m-auto">
        <div className="bg-[url('/bg.png')] bg-cover w-[100%] lg:flex-row flex flex-col items-center justify-center py-[80px] max-md:py-[30px] px-[80px] max-tab:px-[40px] max-laptop:px-[80px] max-md:px-[30px] gap-[4%]">
          <div className="max-w-[2000px] w-full mx-auto flex gap-[60px] justify-between items-center px-[40px] max-lg:p-[40px] max-md:p-[0px]">
            <div className="w-full text-light400 flex flex-col gap-6">
              <h3 className="text-sm font-[Outfit-Bold] max-laptop:text-mf max-md:text-center">
                {t("flextop.heading1")}
              </h3>
              <h1 className="font-[Outfit-Bold] text-left text-lg  leading-[60px] max-laptop:text-lf max-md:text-sm max-md:leading-8 max-md:text-center max-laptop:font-[700] max-laptop:leading-10">
                {t("flextop.heading2")}
              </h1>
              <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                {t("flextop.paragraph")}
              </p>
              <div className="btn flex gap-[20px] max-md:flex-col">
                <button className="font-[Outfit-Bold] text-primary text-sm font-bold bg-white px-4 py-3 rounded-[12px] whitespace-nowrap max-laptop:text-mf">
                  {t("flextop.button1")}
                </button>
                <button className="font-[Outfit-Bold] text-light400 text-sm bg-transperent px-4 py-3 border border-white rounded-[12px] whitespace-nowrap max-laptop:text-mf">
                  {t("flextop.button2")}
                </button>
              </div>
            </div>
            <div className="w-full lg:flex hidden">
              <video
                autoPlay
                muted
                className="object-cover m-auto controls autoPlay muted"
              >
                <source
                  className="w-full h-full object-cover"
                  src="./flexvid/vid.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flextop;
