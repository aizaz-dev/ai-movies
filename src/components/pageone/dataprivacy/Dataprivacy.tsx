
import { useTranslation } from "react-i18next";

const Dataprivacy = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full mt-[40px] bg-light100 py-10 px-[80px] max-tab:px-[40px] max-md:px-[30px]">
      <div className="max-w-[2000px] m-auto">
        <h3 className="text-sm  font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
        {t("Dataprivacy.TITLE")}

        </h3>
        <h1 className="text-lg font-bold  max-md:text-sm  max-md:text-center max-laptop:text-lf ">
        {t("Dataprivacy.SUBTITLE")}

        </h1>

        <div className="w-[70%] max-md:w-full mx-auto flex max-md:flex-col justify-around gap-6 mt-[30px]">
          <div className="three text-center w-[30%] max-md:w-full max-md:items-start flex flex-col items-center justify-center">
            <h1 className="text-sm text-primary text-center font-bold font-[Outfit-Bold] max-md:text-left max-laptop:text-mf flex items-center gap-2 max-tab:leading-5">
              Sichere Übertragung
            </h1>
            <p className="text-sm font-[Outfit-Regular]  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
              Die Daten werden verschlüsselt an einen deutschen Server
              übertragen.
            </p>
          </div>
          <div className="three text-center w-[30%] max-md:w-full max-md:items-start flex flex-col items-center justify-center">
            <h1 className="text-sm text-primary font-bold font-[Outfit-Bold] max-md:text-left max-laptop:text-mf flex items-center gap-2 max-tab:leading-5">
              Speicherort des Videos
            </h1>
            <p className="text-sm font-[Outfit-Regular]  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
              Das Video ist sicher auf einem deutschen Server gespeichert.
            </p>
          </div>
        </div>

        <div className="images mt-[30px] items-center justify-center w-[100%] mx-auto  flex max-md:hidden">
          <div className="one flex w-[15%] flex-col  justify-center items-center">
            <img
              className="opacity-0 w-[5%]  transform rotate-180"
              src="pageone/dataprivacy/line.png"
              alt=""
            />

            <img className="" src="pageone/dataprivacy/1.png" alt="" />
            <img
              className="w-[8%] -mt-3 max-tab:-mt-1   max-laptop:-mt-2"
              src="pageone/dataprivacy/line.png"
              alt=""
            />
          </div>
          <img
            src="pageone/dataprivacy/Linie.svg"
            alt=""
            className="h-[15px] -ml-3 max-laptop:-ml-2 max-tab:-ml-1 w-[8%] -mr-2"
          />

          <div className="two flex w-[15%] flex-col items-center">
            <img
              className=" w-[8%] -mb-2 max-laptop:-mb-1 transform rotate-180"
              src="pageone/dataprivacy/line.png"
              alt=""
            />
            <img className="" src="pageone/dataprivacy/2.png" alt="" />
            <img
              className="opacity-0 w-[8%] -mt-[10px]"
              src="pageone/dataprivacy/line.png"
              alt=""
            />
          </div>
          <img
            src="pageone/dataprivacy/Linie.svg"
            alt=""
            className="-ml-2 max-tab:-ml-1 h-[15px] -mr-2 w-[8%]"
          />
          <div className="three flex w-[15%] flex-col items-center">
            <img
              className="opacity-0 w-[8%] -mt-3  transform rotate-180"
              src="pageone/dataprivacy/line.png"
              alt=""
            />

            <img className="" src="pageone/dataprivacy/3.png" alt="" />
            <img
              className=" w-[8%] -mt-3 max-tab:-mt-1 max-laptop:-mt-2"
              src="pageone/dataprivacy/line.png"
              alt=""
            />
          </div>
          <img
            src="pageone/dataprivacy/Linie.svg"
            alt=""
            className="-ml-2 max-tab:-ml-1 h-[15px] w-[8%] -mr-2"
          />
          <div className="four w-[15%] flex flex-col items-center">
            <img
              className="w-[8%] -mb-0  transform rotate-180"
              src="pageone/dataprivacy/line.png"
              alt=""
            />

            <img className="-mt-[5px]" src="pageone/dataprivacy/4.png" alt="" />
            <img
              className="opacity-0 w-[8%] -mt-3 max-laptop:-mt-2"
              src="pageone/dataprivacy/line.png"
              alt=""
            />
          </div>
          <img
            src="pageone/dataprivacy/Linie.svg"
            alt=""
            className="-ml-2 max-tab:-ml-1 h-[15px] w-[8%] -mr-2"
          />
          <div className="five w-[15%] flex flex-col items-center">
            <img
              className="opacity-0 w-[8%]  transform rotate-180"
              src="pageone/dataprivacy/line.png"
              alt=""
            />

            <img className="" src="pageone/dataprivacy/5.png" alt="" />
            <img
              className="w-[8%] -mt-3 max-tab:-mt-1 max-laptop:-mt-2"
              src="pageone/dataprivacy/line.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-[100%] flex max-md:flex-col justify-between items-center mt-[30px] max-md:gap-4">
            <div className="one w-[30%] max-md:w-full flex flex-col items-center justify-center max-md:items-start">
              <h1 className="text-sm  text-primary  text-center font-bold font-[Outfit-Bold] max-md:text-left max-laptop:text-mf flex items-center  gap-2">
                Dateneingabe
              </h1>
              <p className="text-sm font-[Outfit-Regular]  text-center max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
                Die Daten werden in unserer Webapp eingegeben.
              </p>
            </div>

            <div className="two w-[30%] max-md:w-full max-md:items-start flex flex-col items-center justify-center">
              <h1 className="text-sm text-primary text-center font-bold font-[Outfit-Bold] max-md:text-left max-laptop:text-mf flex items-center gap-2">
                Interne Verarbeitung
              </h1>
              <p className="text-sm font-[Outfit-Regular]  text-center max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
                Die Daten werden durch eigene KI Modelle, ohne Aufruf der OpenAI
                API, datenschutzkonform verarbeitet.
              </p>
            </div>

            <div className="three text-center w-[30%] max-md:w-full max-md:items-start flex flex-col items-center justify-center">
              <h1 className="text-sm text-primary text-center font-bold font-[Outfit-Bold] max-md:text-left max-laptop:text-mf flex items-center gap-2">
                Sichere Darstellung
              </h1>
              <p className="text-sm font-[Outfit-Regular] text-center max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
                Das Video wird in der Webapp sicher dargestellt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dataprivacy;
