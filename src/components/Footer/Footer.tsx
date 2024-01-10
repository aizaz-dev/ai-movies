import { useTranslation } from "react-i18next";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { BsSend } from "react-icons/bs";
import React, { useEffect } from "react";

const Footer = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    const defaultLanguage = storedLanguage || 'en';
    
    i18n.changeLanguage(defaultLanguage);
    localStorage.setItem('selectedLanguage', defaultLanguage); // Set default language to local storage
  }, [i18n]);

  return (
    <div className="bg-dark200  lg:px-[80px] px-[20px] pb-[40px]  w-[100%]">
     <div className="max-w-[2000px] mx-auto">
      <div className="">
      <div className="flex h-fit ">
        <img className="w-[200px] max-laptop:w-[150px] h-fit" src="/white.svg" alt="" />
      </div>
      <div className="flex md:flex-row justify-between gap-[30px] flex-col">
        <div className="flex flex-wrap gap-[60px] max-md:items-start max-md:justify-around">
          <div className="flex flex-col gap-1">
            <div className="text-sm font-[Outfit-Bold] text-light400  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
              {t("footer.quickFind")}
            </div>
            <div className="text-sm font-[Outfit-Regular] text-light200  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
              {t("footer.caseStudies")}
            </div>
            <div className="text-sm font-[Outfit-Regular] text-light200  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
              {t("footer.aboutUs")}
            </div>
            <div className="text-sm font-[Outfit-Regular] text-light200  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
              {t("footer.contact")}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm font-[Outfit-Bold] text-light400 max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
              {t("footer.legal")}
            </div>
            <div className="text-sm font-[Outfit-Regular] text-light200  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
              {t("footer.imprint")}
            </div>
            <div className="text-sm font-[Outfit-Regular] text-light200  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
              {t("footer.privacy")}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm font-[Outfit-Bold] text-light400  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
              {t("footer.additional")}
            </div>
            <div className="text-sm font-[Outfit-Regular] text-light200  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
              {t("footer.contact")}
            </div>
            <div className="text-sm font-[Outfit-Regular] text-light200  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
              {t("footer.faq")}
            </div>
            <div className="text-sm font-[Outfit-Regular] text-light200  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
              {t("footer.jobs")}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm font-[Outfit-Bold] text-light400  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
              {t("footer.social")}
            </div>
            <div className="text-sm font-[Outfit-Regular] text-light200  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
              {t("footer.news")}
            </div>
            <div className="text-sm font-[Outfit-Regular] text-light200  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
              {t("footer.blog")}
            </div>
            <div className="flex gap-[10px] mt-3">
              <div className="bg-white rounded-sm p-[4px]">
                <FaFacebookF className="text-dark200 text-[18px]" />
              </div>
              <div className="bg-white rounded-sm p-[4px]">
                <FaLinkedinIn className="text-dark200 text-[18px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-sm font-[Outfit-Bold] text-light400  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
            {t("footer.dontMiss")}
          </div>
          <div className="text-sm font-[Outfit-Bold] text-light400  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
            {t("footer.subscribeNewsletter")}
          </div>
          <input
            className="text-sm font-[Outfit-Bold] text-light400  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px] w-fit px-[20px] py-[10px] my-1 border-[3px] border-white rounded-md bg-transparent"
            placeholder={t("footer.emailPlaceholder")}
            type="text"
          />
          <div className=" text-sm font-[Outfit-Regular] text-light200  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
            {t("footer.subscriptionNote")}
          </div>
          <div className="max-md:hidden">
          <button className="text-primary border-none  text-sm max-laptop:text-mf font-bold border-[2px]  border-primary py-[10px] px-[15px]  mt-6 max-md:text-[14px] whitespace-nowrap max-md:mx-auto  gap-2 font-[Outfit-Bold] flex items-center  bg-light200 rounded-md w-fit ">
            <BsSend />
            {t("footer.subscribeButton")}
          </button>
          </div>
        </div>
      </div>
      <div className="max-md:flex max-md:items-center max-md:justify-center">
        <select
          name=""
          id=""
          className="rounded-md px-[24px] max-tab:mt-[20px] py-[8px] font-[Outfit-Bold] max-md:mx-auto"
          onChange={(e) => {
            const selectedLanguage = e.target.value;
            i18n.changeLanguage(selectedLanguage);
            localStorage.setItem('selectedLanguage', selectedLanguage);
          }}  
        >
          <option value="en">{t("languages.english")}</option>
          <option value="fr">{t("languages.french")}</option>
          {/* Add more language options as needed */}
        </select>
      </div>
      </div>
      </div>
     </div>
  );
};

export default Footer;
