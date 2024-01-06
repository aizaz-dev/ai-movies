import React from "react";
import { FaCheck } from "react-icons/fa";

const Function = () => {
  return (
    <div className="w-full px-[80px] max-tab:px-[40px] py-4 max-md:px-[30px]">
      <div className="container w-[95%] max-w-[2000px] m-auto flex max-tab:flex-col max-tab:justify-center max-tab:items-center">
        <div className="leftimg w-[50%] max-tab:w-full object-cover px-[15px]">
          <img
            className="object-cover"
            src="pageone/function/function2.png"
            alt="func"
          />
        </div>

        <div className="rightcont w-[50%] max-tab:w-full flex items-center max-tab:justify-center px-[15px] max-tab:py-10">
          <div className="flex flex-col gap-5">
            <p className="text-sm font-bold font-[Outfit-Regular] text-primary max-md:text-center max-laptop:text-mf max-md:leading-[0]">
              FUNKTIONSWEISE
            </p>
            <h1 className="text-left text-lg font-black font-[Outfit-Bold] leading-[60px] max-laptop:text-lf max-md:text-sm max-md:leading-8 max-md:text-center max-laptop:font-[700] max-laptop:leading-10">
              Schnell, einfach, effektiv
            </h1>
            <p className="text-left text-sm font-[Outfit-Regular] max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-justify">
              Sie übermitteln die Corporate Design Vorgaben Ihrer Firma, laden
              einen Inputtext hoch und wählen den gewünschten Sprecher für die
              Vertonung Ihres Videos aus. Das Ergebnis: Ein maßgeschneidertes
              Schulungsvideo, das exakt Ihren Vorgaben entspricht.
            </p>
            <div className="tick flex flex-col max-md:flex-col  justify-center max-tab:flex-wrap  max-md:gap-5 text-sm text-greyb max-laptop:text-mf">
              <p className="flex items-center gap-4 whitespace-nowrap">
                {" "}
                <FaCheck className='text-primary font-[Outfit-Regular]'/>
                42% hohere Mitarbeiter Produktivitat
              </p>
              <p className="flex items-center gap-4 whitespace-nowrap font-[Outfit-Regular]">
                {" "}
                <FaCheck className='text-primary font-[Outfit-Regular]'/>
                42% hohere Mitarbeiter Produktivitat
              </p>
              <p className="flex items-center gap-4 whitespace-nowrap font-[Outfit-Regular]">
                {" "}
                <FaCheck className='text-primary'/>
                42% hohere Mitarbeiter Produktivitat
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Function;
