// Feature.tsx

import React from 'react';
import { useTranslation } from 'react-i18next';

interface FeatureItem {
  id: number;
  titleKey: string;
  imageSrc: string;
  descriptionKey: string;
}

const Feature: React.FC = () => {
  const { t } = useTranslation();

  const featuresData: FeatureItem[] = [
    {
      id: 1,
      titleKey: 'feature1Title',
      imageSrc: '/pageone/feature/1.png',
      descriptionKey: 'feature1Description',
    },
    {
      id: 2,
      titleKey: 'feature2Title',
      imageSrc: '/pageone/feature/2.png',
      descriptionKey: 'feature2Description',
    },
    {
      id: 3,
      titleKey: 'feature3Title',
      imageSrc: '/pageone/feature/3.png',
      descriptionKey: 'feature3Description',
    },
    {
      id: 4,
      titleKey: 'feature4Title',
      imageSrc: '/pageone/feature/4.png',
      descriptionKey: 'feature4Description',
    },
    // Add more features as needed
  ];

  return (
    <div className="w-full bg-white py-10 px-[80px] max-tab:px-[40px] max-md:px-[30px] ">
      <div className="max-w-[2000px] m-auto">
        <h3 className="text-sm font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
          {t('features.sectionTitle')}
        </h3>
        <h1 className="text-lg font-[Outfit-Bold]  max-md:text-sm max-md:text-center max-laptop:text-lf ">
          {t('features.idealFeaturesTitle')}
        </h1>
        <div className="flexitems mt-[30px] grid grid-cols-4 max-md:grid-cols-1 max-tab:grid-cols-2 gap-[50px] items-start max-tab:mt-[20px] max-md:flex-col max-md:gap-[40px]">
          {featuresData.map((feature) => (
            <div key={feature.id} className="item w-[100%] p-[30px] max-md:w-full max-md:items-center flex flex-col gap-[30px]">
              <img className="w-[50%]  max-md:w-[80%]" src={feature.imageSrc} alt="" />
              <div className="flex flex-col gap-2">
                <h1 className="text-sm text-primary font-bold font-[Outfit-Bold] max-md:text-left max-laptop:text-mf whitespace-nowrap">{feature.titleKey}</h1>
                <p className="text-sm max-md:text-mf leading-7 font-[Outfit-Regular] max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start">{feature.descriptionKey}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-tab:flex justify-center items-center">
          <button className='float-right font-[Outfit-Bold]  text-primary text-sm max-laptop:text-mf font-bold border-[2px] border-solid border-primary py-[10px] px-[15px] rounded-[10px] mt-6 max-md:text-[14px] whitespace-nowrap max-md:mx-auto'>
            {t('features.demoButton')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
