import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Feature = () => {
  const featuresData = [
    {
      id: 1,
      title: "Vielfältige Exportoptionen",
      imageSrc: "/feature/1.png",
      description:
        "Laden Sie Trainings als MP4 herunter, nutzen Sie die LMS-kompatible Datei oder teilen Sie Ihre Inhalte direkt via URL. Zusätzlich steht ein PDF-Export für Animationen bereit.",
    },
    {
      id: 2,
      title: "Nachbearbeitungen",
      imageSrc: "/feature/2.png",
      description:
        "Aktualisieren Sie Ihre Videos jederzeit mit visuellen und textuellen Anpassungen, um Inhalte aktuell zu halten.",
    },
    {
      id: 3,
      title: "Automatisierte Animationen",
      imageSrc: "/feature/3.png",
      description:
        "Erstellen Sie aus Texteingaben automatisch Animationen, inklusive Diagramme und Icons.",
    },
    {
      id: 4,
      title: "Diverse Sprachstile",
      imageSrc: "/feature/4.png",
      description:
        "Geben Sie Inhalte stichpunktartig ein und wählen Sie aus verschiedenen Ausgabestilen, angepasst an Ihre Zielgruppe - von einfacher Sprache bis zu Fachjargon.",
    },
  ];

  return (
    <div className="w-full bg-white py-10 px-[80px] max-tab:px-[40px] max-md:px-[30px] ">
      <div className="max-w-[2000px] m-auto">
        <h3 className="text-sm font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
          FEATURES
        </h3>
        <h1 className="text-lg font-[Outfit-Bold]  max-md:text-sm max-md:text-center max-laptop:text-lf ">
          Welche Funktionen können Sie nutzen?
        </h1>
        <div className="flexitems mt-[30px] grid grid-cols-4 max-md:grid-cols-1 max-tab:grid-cols-2 gap-[50px] items-start max-tab:mt-[20px] max-md:flex-col max-md:gap-[40px]">
          {featuresData.map((feature) => (
            <div key={feature.id} className="item w-[100%] p-[30px] max-md:w-full max-md:items-center flex flex-col gap-[30px]">
              <img className="w-[50%] max-md:w-[80%]" src={feature.imageSrc} alt="" />
              <div className="flex flex-col gap-2">
                <h1 className="text-sm text-primary font-bold font-[Outfit-Bold] max-md:text-left max-laptop:text-mf whitespace-nowrap">{feature.title}</h1>
                <p className="text-sm max-md:text-mf leading-7 font-[Outfit-Regular] max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-tab:flex justify-center items-center">
          <button className='float-right font-[Outfit-Bold]  text-primary text-sm max-laptop:text-mf font-bold border-[2px] border-solid border-primary py-[10px] px-[15px] rounded-[10px] mt-6 max-md:text-[14px] whitespace-nowrap max-md:mx-auto'>Demovideo kostenlos erstellen</button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
