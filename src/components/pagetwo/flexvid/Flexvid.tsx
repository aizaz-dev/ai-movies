import { useTranslation } from "react-i18next";

const Flexvid = () => {
  // Access translation function
  const { t } = useTranslation();

  return (
    <div className="w-full m-auto">
      {/* Video section with background image */}
      <div className="bg-[url('./flexvid/bg.png')] bg-cover w-[100%] lg:flex-row flex flex-col items-center justify-center py-[80px] max-md:py-[30px] px-[80px] max-laptop:px-0 gap-[4%]">
        {/* Content container */}
        <div className="max-w-[2000px] w-full mx-auto flex flex-row-reverse gap-[60px] justify-between items-center px-[40px] max-lg:p-[40px] max-md:p-[25px]">
          {/* Text content */}
          <div className="w-full text-light400 flex flex-col">
            {/* Headline */}
            <h1 className="text-left text-lg font-[Outfit-Bold] leading-[60px] max-md:text-sm max-md:leading-8 max-md:text-center">
              {t("Flexvid.HEADLINE")}
            </h1>
            {/* Description */}
            <p className="text-left text-sm max-laptop:text-mf font-[Outfit-Regular] max-laptop:w-[436px] max-md:w-auto max-md:text-center max-md:text-mf mt-[8px]">
              {t("Flexvid.DESCRIPTION")}
            </p>
          </div>
          {/* Video (hidden on smaller screens) */}
          <div className="w-full lg:flex hidden">
            <video className="object-cover m-auto" autoPlay muted>
              {/* Video source */}
              <source
                className="w-full h-full"
                src="./flexvid/vid.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flexvid;
