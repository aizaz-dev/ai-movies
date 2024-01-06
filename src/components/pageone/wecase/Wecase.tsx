import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Wecase = () => {
  return (
    <div className="w-full bg-light100 py-10 px-[80px] max-tab:px-[40px] max-md:px-[30px] mt-[90px] border-b-[1px] border-light200">
      <div className="max-w-[2000px] m-auto">
        <h3 className="text-sm  font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
          USE CASES
        </h3>
        <h1 className="text-lg font-[Outfit-Regular]  max-md:text-sm max-md:text-center max-laptop:text-lf ">
          Wo können Sie unsere Videos einsetzen?
        </h1>
        <p className="text-left text-sm font-[Outfit-Regular] max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
          Unsere KI Software kann im Unternehmen für die verschiedensten
          Schulungszwecke verwendet werden, insbesondere eignet sich der Start
          in den folgenden Bereichen, um Ihr Unternehmen und Ihre Verwaltung zu
          entlasten:
        </p>
        <div className="flex max-md:flex-col gap-10 mt-[40px]">
          <div className="full bg-white w-[60%] max-md:w-full p-[40px] rounded-[10px] shadow-md">
            <p className="text-left text-sm font-[Outfit-Regular]  max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
              Sorgen Sie für Rechtskonformität im Unternehmen. Mit Hilfe unserer
              Technologie vermitteln Sie gesetzliche Anforderungen wie das
              Geldwäschegesetz oder das Lieferkettengesetz sowie den Einsatz
              neuer Technologien wie ChatGPT klar und prägnant.{" "}
            </p>
            <p className="text-left text-sm  max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-justify mt-10">
              Aktuell genutzt in folgenden Industrien:
            </p>
            <div className="flex gap-[30px] max-tab:flex-col max-tab:items-start max-tab:gap-[15px]">
              <p className="text-primary text-sm font-[Outfit-Regular] max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-justify flex items-center justify-center gap-[10px]">
                Maschinenbau{" "}
                <img
                  className="w-[40px] h-[40px]"
                  src="pageone/wecase/wecase.png"
                  alt=""
                />
              </p>
              <p className="text-primary text-sm font-[Outfit-Regular] max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-justify flex items-center justify-center gap-[10px]">
                Elektrotechnik{" "}
                <img
                  className="w-[40px] h-[40px]"
                  src="pageone/wecase/wecase.png"
                  alt=""
                />
              </p>
              <p className="text-primary text-sm font-[Outfit-Regular] max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-justify flex items-center justify-center gap-[10px]">
                Unternehmensberatungen{" "}
                <img
                  className="w-[40px] h-[40px]"
                  src="pageone/wecase/wecase.png"
                  alt=""
                />
              </p>
            </div>
              <video className="mt-[30px]" src="./flexvid/vid.mp4"></video>
              <button className="float-right mt-[30px] whitespace-nowrap flex items-center justify-center gap-2 text-primary text-sm max-laptop:text-mf font-bold py-[10px] px-[15px] rounded-[10px] max-md:text-[14px] max-md:mx-auto">Case Study Ansehen  <FaArrowRightLong /></button>
          </div>
          <div className="half bg-white w-[30%] h-fit max-md:w-full shadow-md rounded-[10px]">
            <div className="child bg-light200 rounded-t-[10px] pl-[40px] max-laptop:pl-[20px] max-tab:pl-[0px]">
                <div className="text-primary text-sm font-[Outfit-Regular] max-laptop:text-mf font-bold py-[20px] px-[15px] rounded-[10px] max-md:text-[14px] max-md:mx-auto ">Compliance</div>
            </div>
            <div className="child  px-[40px] max-laptop:pl-[20px] max-tab:pl-[0px]">
                <div className=" text-sm max-laptop:text-mf font-[Outfit-Regular] font-bold py-[20px] px-[15px] rounded-[10px] max-md:text-[14px] max-md:mx-auto ">Softwareschulungen</div>
            </div>
            <div className="child  px-[40px] max-laptop:pl-[20px] max-tab:pl-[0px]">
                <div className=" text-sm max-laptop:text-mf font-[Outfit-Regular] font-bold py-[20px] px-[15px] rounded-[10px] max-md:text-[14px] max-md:mx-auto ">Produktschulungen</div>
            </div>
            <div className="child  px-[40px] max-laptop:pl-[20px] max-tab:pl-[0px]">
                <div className=" text-sm max-laptop:text-mf font-[Outfit-Regular] font-bold py-[20px] px-[15px] rounded-[10px] max-md:text-[14px] max-md:mx-auto ">Prozessschulungen</div>
            </div>
            <div className="child  px-[40px] max-laptop:pl-[20px] max-tab:pl-[0px]">
                <div className=" text-sm max-laptop:text-mf font-[Outfit-Regular] font-bold py-[20px] px-[15px] rounded-[10px] max-md:text-[14px] max-md:mx-auto ">Interne Kommunikation</div>
            </div>
            <div className="child  px-[40px] max-laptop:pl-[20px] max-tab:pl-[0px]">
                <div className=" text-sm max-laptop:text-mf font-[Outfit-Regular] font-bold py-[20px] px-[15px] rounded-[10px] max-md:text-[14px] max-md:mx-auto ">Andere</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wecase;
