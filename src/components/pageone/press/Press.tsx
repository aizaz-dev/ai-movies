import React from "react";
import { useTranslation } from "react-i18next";

import Carousel from "./Slidertwo";

const Press = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-light100 py-10 px-[80px] max-tab:px-[40px] max-md:px-[30px]">
      <div className="max-w-[2000px] m-auto">
        <h3 className="text-sm  font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
        {t("Press.TITLE")}

        </h3>
        <h1 className="text-lg font-bold  max-md:text-sm  max-md:text-center max-laptop:text-lf ">
        {t("Press.SUBTITLE")}

        </h1>

        <div className="max-tab:px-[40px] max-md:px-0">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Press;
