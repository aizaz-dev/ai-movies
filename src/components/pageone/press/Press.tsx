import React from "react";
import { useTranslation } from "react-i18next";

import Carousel from "./Slidertwo";
import CustomButton from "../../CustomButton";

const Press = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-light100 py-14 px-[80px] max-tab:px-[40px] max-md:px-[30px]">
      <div className="max-w-[2000px] m-auto">
        <h3 className="text-sm font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
          {t("Press.TITLE")}
        </h3>
        <h1 className="text-lg font-[Outfit-Bold] max-md:text-sm  max-md:text-center max-laptop:text-lf ">
          {t("Press.SUBTITLE")}
        </h1>

        <div className="max-tab:px-[40px] max-md:px-0">
          <Carousel />
        </div>
        <div className="flex justify-end mt-[30px]">
          <CustomButton type="filledBlue" title="Mehr News" />
        </div>
      </div>
    </div>
  );
};

export default Press;
