import { FaAngleRight } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-[2000px] mx-auto py-[50px]  w-[100%] flex flex-col lg:px-[80px] px-[20px] ">
      <div className="w-[100%] flex items-center lg:gap-6 md:gap-4 gap-3 flex-col lg:mt-[50px] md:mt-[30px] mt-[20px]">
        <h1 className="font-[Outfit-Bold] w-[93%] mb-[60px] text-left text-lg   leading-[60px] max-laptop:text-lf max-md:text-sm max-md:leading-8 max-md:text-center max-laptop:font-[700] max-laptop:leading-10">
        {t("blogTitle")}

        </h1>
        <div className="w-[93%] lg:h-[100px] md:h-[80px] h-60px bg-light100  rounded-[5px] flex lg:px-[50px] md:px-[20px] px-[10px] py-[10px] justify-between shadow-md  items-center">
          <div>
            <div className="font-[Outfit-Bold] text-left text-sm  max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
            {t("section1.title")}

            </div>
          </div>
          <div className="text-[40px]   text-light200">
            <FaAngleRight />
          </div>
        </div>

        <div className="w-[93%] lg:h-[100px] md:h-[80px] h-60px bg-light100  rounded-[5px] flex lg:px-[50px] md:px-[20px] px-[10px] py-[10px] justify-between shadow-md  items-center">
          <div>
            <div className="font-[Outfit-Bold] text-left text-sm  max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
            {t("section2.title")}

            </div>
          </div>
          <div className="text-[40px]   text-light200">
            <FaAngleRight />
          </div>
        </div>

        <div className="w-[93%] lg:h-[100px] md:h-[80px] h-60px bg-light100  rounded-[5px] flex lg:px-[50px] md:px-[20px] px-[10px] py-[10px] justify-between shadow-md  items-center">
          <div>
            <div className="font-[Outfit-Bold] text-left text-sm  max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
            {t("section3.title")}

            </div>
          </div>
          <div className="text-[40px]   text-light200">
            <FaAngleRight />
          </div>
        </div>

        <div className="w-[93%] lg:h-[100px] md:h-[80px] h-60px bg-light100  rounded-[5px] flex lg:px-[50px] md:px-[20px] px-[10px] py-[10px] justify-between shadow-md  items-center">
          <div>
            <div className="font-[Outfit-Bold] text-left text-sm  max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
            {t("section3.title")}

            </div>
          </div>
          <div className="text-[40px]   text-light200">
            <FaAngleRight />
          </div>
        </div>
        <div className="w-[93%] lg:h-[100px] md:h-[80px] h-60px bg-light100  rounded-[5px] flex lg:px-[50px] md:px-[20px] px-[10px] py-[10px] justify-between shadow-md  items-center">
          <div>
            <div className="font-[Outfit-Bold] text-left text-sm  max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
            {t("section3.title")}

            </div>
          </div>
          <div className="text-[40px]   text-light200">
            <FaAngleRight />
          </div>
        </div>
        <div className="w-[93%] lg:h-[100px] md:h-[80px] h-60px bg-light100  rounded-[5px] flex lg:px-[50px] md:px-[20px] px-[10px] py-[10px] justify-between shadow-md  items-center">
          <div>
            <div className="font-[Outfit-Bold] text-left text-sm  max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
            {t("section3.title")}

            </div>
          </div>
          <div className="text-[40px]   text-light200">
            <FaAngleRight />
          </div>
        </div>
        <div className="w-[93%] lg:h-[100px] md:h-[80px] h-60px bg-light100  rounded-[5px] flex lg:px-[50px] md:px-[20px] px-[10px] py-[10px] justify-between shadow-md  items-center">
          <div>
            <div className="font-[Outfit-Bold] text-left text-sm  max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
            {t("section3.title")}

            </div>
          </div>
          <div className="text-[40px]   text-light200">
            <FaAngleRight />
          </div>
        </div>
        <div className="w-[93%] lg:h-[100px] md:h-[80px] h-60px bg-light100  rounded-[5px] flex lg:px-[50px] md:px-[20px] px-[10px] py-[10px] justify-between shadow-md  items-center">
          <div>
            <div className="font-[Outfit-Bold] text-left text-sm  max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
            {t("section3.title")}

            </div>
          </div>
          <div className="text-[40px]   text-light200">
            <FaAngleRight />
          </div>
        </div>
        <div className="w-[93%]  md:h-[80px] h-60px bg-light100  rounded-[5px] flex lg:px-[50px] md:px-[20px] px-[10px] py-[10px] justify-between shadow-md  items-center">
          <div>
            <div className="font-[Outfit-Bold] text-left text-sm  max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
            {t("section3.title")}

            </div>
          </div>
          <div className="text-[40px]   text-light200">
            <FaAngleRight />
          </div>
        </div>
        <div className="w-[93%] lg:h-[100px] md:h-[80px] h-60px bg-light100  rounded-[5px] flex lg:px-[50px] md:px-[20px] px-[10px] py-[10px] justify-between shadow-md  items-center">
          <div>
            <div className="font-[Outfit-Bold] text-left text-sm  max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
            {t("section3.title")}

            </div>
          </div>
          <div className="text-[40px]  text-light200">
            <FaAngleRight />
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Blog;
