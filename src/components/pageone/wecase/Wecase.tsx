import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// Interface defining the structure of category data
interface CategoryData {
  description: string;
  currently: string;
  industries: { name: string; iconUrl: string }[];
  videoUrl: string;
  subclasses: { id: "string"; name: "string" }[];
}
// Wecase component
const Wecase = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("compliance");
  // const leftBoxData = [
  //   {
  //     id: "compliance",
  //     title: "Title 1",
  //     description:
  //       "Sorgen Sie für Rechtskonformität im Unternehmen. Mit Hilfe unserer Technologie vermitteln Sie gesetzliche Anforderungen wie das Geldwäschegesetz oder das Lieferkettengesetz sowie den Einsatz neuer Technologien wie ChatGPT klar und prägnant.",
  //     industries: [
  //       { name: "Maschinenbau", iconUrl: "pageone/wecase/wecase.png" },
  //       { name: "Elektrotechnik", iconUrl: "pageone/wecase/wecase.png" },
  //       {
  //         name: "Unternehmensberatungen",
  //         iconUrl: "pageone/wecase/wecase.png",
  //       },
  //     ],
  //     videoUrl: "/flexvid/vid.mp4",
  //   },
  //   {
  //     id: "softwareschulungen",
  //     title: "title2",
  //     description:
  //       "cSorgen Sie für Rechtskonformität im Unternehmen. Mit Hilfe unserer Technologie vermitteln Sie gesetzliche Anforderungen wie das Geldwäschegesetz oder das Lieferkettengesetz sowie den Einsatz neuer Technologien wie ChatGPT klar und prägnant.",
  //     industries: [
  //       { name: "Maschinenbau", iconUrl: "pageone/wecase/wecase.png" },
  //       { name: "Elektrotechnik", iconUrl: "pageone/wecase/wecase.png" },
  //       {
  //         name: "Unternehmensberatungen",
  //         iconUrl: "pageone/wecase/wecase.png",
  //       },
  //     ],
  //     videoUrl: "/flexvid/vid.mp4",
  //   },
  //   {
  //     id: "produktschulungen",
  //     title: "Produktschulungen",
  //     description:
  //       "aSorgen Sie für Rechtskonformität im Unternehmen. Mit Hilfe unserer Technologie vermitteln Sie gesetzliche Anforderungen wie das Geldwäschegesetz oder das Lieferkettengesetz sowie den Einsatz neuer Technologien wie ChatGPT klar und prägnant.",
  //     industries: [
  //       { name: "Maschinenbau", iconUrl: "pageone/wecase/wecase.png" },
  //       { name: "Elektrotechnik", iconUrl: "pageone/wecase/wecase.png" },
  //       {
  //         name: "Unternehmensberatungen",
  //         iconUrl: "pageone/wecase/wecase.png",
  //       },
  //     ],
  //     videoUrl: "/flexvid/vid.mp4",
  //   },
  //   {
  //     id: "prozessschulungen",
  //     title: "Prozessschulungen",
  //     description:
  //       "bSorgen Sie für Rechtskonformität im Unternehmen. Mit Hilfe unserer Technologie vermitteln Sie gesetzliche Anforderungen wie das Geldwäschegesetz oder das Lieferkettengesetz sowie den Einsatz neuer Technologien wie ChatGPT klar und prägnant.",
  //     industries: [
  //       { name: "Maschinenbau", iconUrl: "pageone/wecase/wecase.png" },
  //       { name: "Elektrotechnik", iconUrl: "pageone/wecase/wecase.png" },
  //       {
  //         name: "Unternehmensberatungen",
  //         iconUrl: "pageone/wecase/wecase.png",
  //       },
  //     ],
  //     videoUrl: "/flexvid/vid.mp4",
  //   },
  // ];

  const leftBoxData = [
    {
      id: "compliance",
      description: `${t("weCase.compliance.Description")}`,
      currently: `${t("weCase.compliance.currently")}`,
      industries: [
        {
          name: `${t("weCase.compliance.Industries.Maschinenbau")}`,
          iconUrl: "pageone/wecase/wecase.png",
        },
        {
          name: `${t("weCase.compliance.Industries.Elektrotechnik")}`,
          iconUrl: "pageone/wecase/wecase.png",
        },
        {
          name: `${t("weCase.compliance.Industries.Unternehmensberatungen")}`,
          iconUrl: "pageone/wecase/wecase.png",
        },
      ],
      subclasses: [],
      videoUrl: "/flexvid/vid.mp4",
    },
    {
      id: "softwareschulungen",
      description: `${t("weCase.softwareschulungen.Description")}`,
      currently: `${t("weCase.softwareschulungen.currently")}`,
      industries: [
        {
          name: `${t("weCase.compliance.Industries.Maschinenbau")}`,
          iconUrl: "pageone/wecase/wecase.png",
        },
        {
          name: `${t("weCase.compliance.Industries.Elektrotechnik")}`,
          iconUrl: "pageone/wecase/wecase.png",
        },
        {
          name: `${t("weCase.compliance.Industries.Unternehmensberatungen")}`,
          iconUrl: "pageone/wecase/wecase.png",
        },
      ],
      subclasses: [],
      videoUrl: "/flexvid/vid.mp4",
    },
    {
      id: "produktschulungen",
      description: `${t("weCase.produktschulungen.Description")}`,
      currently: `${t("weCase.produktschulungen.currently")}`,
      industries: [
        {
          name: `${t("weCase.compliance.Industries.Maschinenbau")}`,
          iconUrl: "pageone/wecase/wecase.png",
        },
        {
          name: `${t("weCase.compliance.Industries.Elektrotechnik")}`,
          iconUrl: "pageone/wecase/wecase.png",
        },
        {
          name: `${t("weCase.compliance.Industries.Unternehmensberatungen")}`,
          iconUrl: "pageone/wecase/wecase.png",
        },
      ],
      subclasses: [],
      videoUrl: "/flexvid/vid.mp4",
    },
    {
      id: "prozessschulungen",
      description: `${t("weCase.prozessschulungen.Description")}`,
      currently: `${t("weCase.prozessschulungen.currently")}`,
      industries: [
        {
          name: `${t("weCase.compliance.Industries.Maschinenbau")}`,
          iconUrl: "pageone/wecase/wecase.png",
        },
        {
          name: `${t("weCase.compliance.Industries.Elektrotechnik")}`,
          iconUrl: "pageone/wecase/wecase.png",
        },
        {
          name: `${t("weCase.compliance.Industries.Unternehmensberatungen")}`,
          iconUrl: "pageone/wecase/wecase.png",
        },
      ],
      subclasses: [],
      videoUrl: "/flexvid/vid.mp4",
    },
    {
      id: "InterneKommunikation",
      description: `${t("weCase.InterneKommunikation.Description")}`,
      currently: `${t("weCase.InterneKommunikation.currently")}`,
      industries: [
        {
          name: `${t("weCase.compliance.Industries.Maschinenbau")}`,
          iconUrl: "pageone/wecase/wecase.png",
        },
        {
          name: `${t("weCase.compliance.Industries.Elektrotechnik")}`,
          iconUrl: "pageone/wecase/wecase.png",
        },
        {
          name: `${t("weCase.compliance.Industries.Unternehmensberatungen")}`,
          iconUrl: "pageone/wecase/wecase.png",
        },
      ],
      videoUrl: "",
    },
    {
      id: "Andere",
      subclasses: [
        {
          id: "Bedienungsanleitungen",
          name: `${t("weCase.Andere.subclasses.h1")}`,
          des: `${t("weCase.Andere.subclasses.p1")}`,
        },
        {
          id: "Gesundheitsschutzschulungen",
          name: "Gesundheitsschutzschulungen",
        },
        {
          id: "CSR-Schulungen:",
          name: "CSR-Schulungen:",
        },
      ],
    },
  ];
  const [selectedCategoryData, setSelectedCategoryData] =
    useState<CategoryData>({
      description: `${t("weCase.compliance.Description")}`,
      currently: `${t("weCase.compliance.currently")}`,
      industries: [
        {
          name: `${t("weCase.compliance.Industries.Maschinenbau")}`,
          iconUrl: "pageone/wecase/wecase.png",
        },
        {
          name: `${t("weCase.compliance.Industries.Elektrotechnik")}`,
          iconUrl: "pageone/wecase/wecase.png",
        },
        {
          name: `${t("weCase.compliance.Industries.Unternehmensberatungen")}`,
          iconUrl: "pageone/wecase/wecase.png",
        },
      ],
      subclasses: [],
      videoUrl: "/flexvid/vid.mp4",
    });
  // Effect to update selected category data when language changes or category change
  useEffect(() => {
    // This effect will run whenever the language changes
    setSelectedCategoryData((prevData) => ({
      ...prevData,
      description: t(`weCase.${selectedCategory}.Description`),
      currently: t(`weCase.${selectedCategory}.currently`),
      // ... update other properties accordingly
    }));
  }, [selectedCategory, t]);
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const dataIndex = leftBoxData.findIndex((data) => data.id === category);
    if (dataIndex !== -1) {
      setSelectedCategoryData(leftBoxData[dataIndex]);
    }
  };

  const categories = [
    {
      id: "compliance",
      name: "Compliance",
      videoUrl: "/flexvid/vid.mp4",
    },
    {
      id: "softwareschulungen",
      name: "Softwareschulungen",
      videoUrl: "/flexvid/vid.mp4",
    },
    {
      id: "produktschulungen",
      name: "Produktschulungen",
      videoUrl: "/flexvid/vid.mp4",
    },
    {
      id: "prozessschulungen",
      name: "Prozessschulungen",
      videoUrl: "/flexvid/vid.mp4",
    },
    {
      id: "InterneKommunikation",
      name: "Interne Kommunikation",
      videoUrl: "/flexvid/vid.mp4",
    },
    {
      id: "Andere",
      name: "Andere",
      videoUrl: "/flexvid/vid.mp4",
    },
    // {
    //   id: "Bedienungsanleitungen",
    //   name: "Bedienungsanleitungen",
    //   videoUrl: "/flexvid/vid.mp4",
    // },
    // {
    //   id: "Gesundheitsschutzschulungen",
    //   name: "Gesundheitsschutzschulungen",
    //   videoUrl: "/flexvid/vid.mp4",
    // },
    // {
    //   id: "CSR-Schulungen:",
    //   name: "CSR-Schulungen:",
    //   videoUrl: "/flexvid/vid.mp4",
    // },
    // Add more objects for other categories
  ];

  return (
    <div className="w-full bg-light100 py-10 px-[80px] max-tab:px-[40px] max-md:px-[30px] mt-[90px] border-b-[2px] border-light300 border-opacity-[0.5]">
      <div className="max-w-[2000px] m-auto">
        <h3 className="text-sm font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
          {t("weCase.title")}
        </h3>
        <h1 className="text-lg font-[Outfit-Bold] max-md:text-sm max-md:text-center max-laptop:text-lf">
          {t("weCase.subtitle")}
        </h1>
        <p className="text-left text-sm mb-[40px] font-[Outfit-Regular] max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
          {t("weCase.description")}
        </p>

        <div className="flex max-maxtab:flex-col gap-10">
          <div className="full bg-light400 w-[60%] max-md:w-full p-[40px] md:px-[60px] rounded-[10px] shadow-md">
            <p className="text-left text-sm font-[Outfit-Regular] max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
              {selectedCategoryData?.description}
            </p>
            <p className="text-left text-sm max-tab:w-auto font-[Outfit-Regular] max-md:text-mf max-laptop:text-mf max-md:text-justify mt-10">
              {selectedCategoryData?.currently}
            </p>
            <div className="flex flex-col gap-6">
              {selectedCategoryData?.subclasses?.map((item, index) => {
                return (
                  <div className="flex flex-col gap-1">
                    <div
                      className="text-left font-[Outfit-Bold] text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-justify"
                      key={index}
                    >
                      {item?.name}
                    </div>
                    <div
                      className="text-left text-sm max-tab:w-auto font-[Outfit-Regular] max-md:text-mf max-laptop:text-mf max-md:text-justify "
                      key={index}
                    >
                      {item?.name}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-x-[20px] max-tab:flex-col max-tab:items-start max-tab:gap-[15px]">
              {selectedCategoryData?.industries?.map((industry, index) => (
                <div
                  key={index}
                  className="text-primary text-sm font-[Outfit-Regular] max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-justify flex items-center justify-center gap-[10px]"
                >
                  {industry?.name}{" "}
                  <img
                    className="w-[40px] h-[40px]"
                    src={industry?.iconUrl}
                    alt={`Icon for ${industry?.name}`}
                  />
                </div>
              ))}
            </div>
            <video
              autoPlay
              muted
              loop
              className="mt-[30px] "
              src={selectedCategoryData.videoUrl}
            ></video>
            <button className="float-right mt-[30px] whitespace-nowrap flex items-center justify-center gap-2 text-primary text-sm max-laptop:text-mf font-bold py-[10px] px-[15px] rounded-[10px] max-md:text-[14px] max-md:mx-auto">
              Case Study Ansehen <FaArrowRightLong />
            </button>
          </div>
          <div className="half bg-light400 rounded-[10px] w-[30%] h-fit max-md:w-full shadow-md">
            <div className="child bg-light200  rounded-[10px] max-tab:pl-[0px]">
              {categories.map((category, index) => (
                <div
                  key={category.id}
                  className={`text-sm font-[Outfit-Regular] font-bold py-[20px] px-[15px] max-md:text-[14px] max-md:mx-auto cursor-pointer ${
                    selectedCategory === category.id
                      ? "bg-light-primary text-primary"
                      : "bg-light400 text-primary"
                  } ${index === 0 ? "rounded-t-[10px]" : ""} ${
                    index === categories.length - 1 ? "rounded-b-[10px]" : ""
                  } ${
                    index > 0 && index < categories.length - 1
                      ? "rounded-none"
                      : ""
                  }`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wecase;
