import React from "react";
import { MdExitToApp } from "react-icons/md";

const featuresData = [
  {
    id: 1,
    image: '/pagetwo/features/1.svg',
    title: "Vielfältige Exportoptionen",
    description:
      "Laden Sie Trainings als MP4 herunter, nutzen Sie die LMS-kompatible Datei oder teilen Sie Ihre Inhalte direkt via URL. Zusätzlich steht ein PDF-Export für Animationen bereit.",
  },
  {
    id: 2,
    image: '/pagetwo/features/2.svg',
    title: "Automatisierte Animationen",
    description:
      "Laden Sie Trainings als MP4 herunter, nutzen Sie die LMS-kompatible Datei oder teilen Sie Ihre Inhalte direkt via URL. Zusätzlich steht ein PDF-Export für Animationen bereit.",
  },
  {
    id: 3,
    image: '/pagetwo/features/3.svg',
    title: "Diverse Sprachstile",
    description:
      "Laden Sie Trainings als MP4 herunter, nutzen Sie die LMS-kompatible Datei oder teilen Sie Ihre Inhalte direkt via URL. Zusätzlich steht ein PDF-Export für Animationen bereit.",
  },
  {
    id: 4,
    image: '/pagetwo/features/4.svg',
    title: "Diverse Sprachstile",
    description:
      "Laden Sie Trainings als MP4 herunter, nutzen Sie die LMS-kompatible Datei oder teilen Sie Ihre Inhalte direkt via URL. Zusätzlich steht ein PDF-Export für Animationen bereit.",
  },
  {
    id: 5,
    image: '/pagetwo/features/5.svg',
    title: "Vielfältige Exportoptionen",
    description:
      "Laden Sie Trainings als MP4 herunter, nutzen Sie die LMS-kompatible Datei oder teilen Sie Ihre Inhalte direkt via URL. Zusätzlich steht ein PDF-Export für Animationen bereit.",
  },
  {
    id: 6,
    image: '/pagetwo/features/6.svg',
    title: "Vielfältige Exportoptionen",
    description:
      "Laden Sie Trainings als MP4 herunter, nutzen Sie die LMS-kompatible Datei oder teilen Sie Ihre Inhalte direkt via URL. Zusätzlich steht ein PDF-Export für Animationen bereit.",
  },
  {
    id: 7,
    image: '/pagetwo/features/7.svg',
    title: "Vielfältige Exportoptionen",
    description:
      "Laden Sie Trainings als MP4 herunter, nutzen Sie die LMS-kompatible Datei oder teilen Sie Ihre Inhalte direkt via URL. Zusätzlich steht ein PDF-Export für Animationen bereit.",
  },
  {
    id: 8,
    image: '/pagetwo/features/8.svg',
    title: "Vielfältige Exportoptionen",
    description:
      "Laden Sie Trainings als MP4 herunter, nutzen Sie die LMS-kompatible Datei oder teilen Sie Ihre Inhalte direkt via URL. Zusätzlich steht ein PDF-Export für Animationen bereit.",
  },
  {
    id: 9,
    image: '/pagetwo/features/9.svg',
    title: "Vielfältige Exportoptionen",
    description:
      "Laden Sie Trainings als MP4 herunter, nutzen Sie die LMS-kompatible Datei oder teilen Sie Ihre Inhalte direkt via URL. Zusätzlich steht ein PDF-Export für Animationen bereit.",
  },
  {
    id: 10,
    image: '/pagetwo/features/10.svg',
    title: "Vielfältige Exportoptionen",
    description:
      "Laden Sie Trainings als MP4 herunter, nutzen Sie die LMS-kompatible Datei oder teilen Sie Ihre Inhalte direkt via URL. Zusätzlich steht ein PDF-Export für Animationen bereit.",
  },
  {
    id: 11,
    image: '/pagetwo/features/12.svg',
    title: "Vielfältige Exportoptionen",
    description:
      "Laden Sie Trainings als MP4 herunter, nutzen Sie die LMS-kompatible Datei oder teilen Sie Ihre Inhalte direkt via URL. Zusätzlich steht ein PDF-Export für Animationen bereit.",
  },
  {
    id: 12,
    image: '/pagetwo/features/13.svg',
    title: "Vielfältige Exportoptionen",
    description:
      "Laden Sie Trainings als MP4 herunter, nutzen Sie die LMS-kompatible Datei oder teilen Sie Ihre Inhalte direkt via URL. Zusätzlich steht ein PDF-Export für Animationen bereit.",
  },
  
  // Add more feature items as needed
];

const Features = () => {
  return (
    <div className="w-full mt-[60px] bg-light100 p-[80px] max-md:p-[30px] max-tab:p-[40px]">
      <div className="max-w-[2000px] mx-auto flex flex-col items-center w-[100%]">
        <div className="w-[95%]">
          <div className="flex flex-col mt-[20px]">
          <h3 className='text-sm font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf'>FEATURES</h3>
    <h1 className='text-lg font-[Outfit-Bold]  max-md:text-sm max-md:text-center max-laptop:text-lf'>Umfangreiche Funktionen für ein ideales Ergebnis</h1>
          </div>
          <div className="mt-[20px] max-md:mt-[0px]">
            <div className="flex flex-wrap justify-center  gap-[80px]">
            {featuresData.map((feature) => (
  <div
    key={feature.id}
    className="relative flex flex-col items-center justify-center transition group"
  >
    <div className="text-dark100 w-[300px] h-[300px] text-4xl opacity-100 transition duration-300 group-hover:opacity-0 flex justify-center items-center">
      <div className="text-[80px] w-[120px] h-[120px] border-2 border-solid border-primary flex items-center justify-center rounded-[50%]">
        <img src={feature.image} alt="" className="w-[50px] h-[50px]"/>
        {/* {feature.image} */}
      </div>
    </div>
    <div className="text-light400 text-center font-[Outfit-Regular] opacity-0 group-hover:opacity-100 absolute bottom-0 w-[300px] p-[30px] bg-primary transition duration-300 flex items-center justify-center">
      {feature.description}
    </div>
    <div className="text-primary text-sm font-[Outfit-Bold] text-center opacity-100 group-hover:opacity-0 absolute bottom-[20px] w-full transition duration-300 whitespace-nowrap max-laptop:text-mf p-2">
      {feature.title}
    </div>
  </div>
))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
