import Joincomponent from "../../components/Stellenbeschreibung/joincomponent/Joincomponent";
import Seemore from "../../components/Stellenbeschreibung/seemore/Seemore";
import { useTranslation } from "react-i18next";

const Stellenbeschreibung = () => {
  const { t } = useTranslation();

  return (
    <div className="">
      <div className=" w-full max-w-[2000px] mx-auto mt-[10px] max-tab:mt-[40px]  p-[80px] max-md:p-[30px] max-tab:p-[40px]">
        <div className=" ">
          <h1 className="text-lg font-[Outfit-Bold]  max-md:text-sm max-md:text-center max-laptop:text-lf">
          {t("JobDescription.section1.title")}

          </h1>
          <h3 className="text-sm font-bold font-[Outfit-Regular] max-md:text-center max-laptop:text-mf">
          {t("JobDescription.section1.subtitle")}

          </h3>
          <div className=" font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start mt-[50px]">
          {t("JobDescription.section1.description")}

          </div>
        </div>
      </div>

      <div className=" w-[100%]  flex  justify-center bg-light100  ">
        <div className=" w-[100%] max-w-[2000px] mx-auto  p-[80px] max-md:p-[30px] max-tab:p-[40px]">
          <div className=" flex  flex-col gap-[20px] mt-[50px]">
            <h3 className=" text-sm font-bold font-[Outfit-Bold] max-md:text-center max-laptop:text-mf text-primary">
            {t("JobDescription.section2.title")}

            </h3>
            <div className=" flex max-tab:flex-wrap    w-[100%]  gap-[40px] justify-between max-laptop:justify-start">
              <div className=" flex items-center gap-[30px] max-md:gap-[15px]">
                <div className="iconline w-[160px] h-[160px] max-laptop:w-[140px] max-laptop:h-[140px] max-md:w-[120px] max-md:h-[120px] bg-light400 rounded-[50%] flex items-center justify-center shadow-md">
                  <img
                    className="  w-[80px] h-[80px] max-laptop:w-[65px] max-laptop:h-[65px]  max-md:w-[50px] max-md:h-[50px]"
                    src="/startup.svg"
                    alt=""
                  />
                </div>
                <div className="textcont ">
                  <h3 className="font-[Outfit-Bold] text-sm font-bold   max-laptop:text-mf">
                  {t("JobDescription.section2.items1.title")}

                  </h3>
                  <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start ">
                  {t("JobDescription.section2.items1.description")}

                  </p>
                </div>
              </div>
              <div className="  flex items-center gap-[30px] ">
              <div className="iconline w-[160px] h-[160px] max-laptop:w-[140px] max-laptop:h-[140px] max-md:w-[120px] max-md:h-[120px] bg-light400 rounded-[50%] flex items-center justify-center shadow-md">
                  <img
                    className="  w-[80px] h-[80px] max-laptop:w-[65px] max-laptop:h-[65px] max-md:w-[50px] max-md:h-[50px]"
                    src="/impact.svg"
                    alt=""
                  />
                </div>
                <div className="textcont  items-start">
                  <h3 className="text-sm font-bold font-[Outfit-Bold]  max-laptop:text-mf">
                  {t("JobDescription.section2.items2.title")}
                  </h3>
                  <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start ">
                  {t("JobDescription.section2.items2.description")}

                  </p>
                </div>
              </div>
              <div className=" flex items-center gap-[30px]">
              <div className="iconline w-[160px] h-[160px] max-laptop:w-[140px] max-laptop:h-[140px] max-md:w-[120px] max-md:h-[120px] bg-light400 rounded-[50%] flex items-center justify-center shadow-md">
                  <img
                    className="  w-[80px] h-[80px] max-laptop:w-[65px] max-laptop:h-[65px] max-md:w-[50px] max-md:h-[50px]"
                    src="/ki.svg"
                    alt=""
                  />
                </div>
                <div className="textcont ">
                  <h3 className="text-sm font-bold font-[Outfit-Regular]  max-laptop:text-mf">
                  {t("JobDescription.section2.items3.title")}

                  </h3>
                  <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start ">
                  {t("JobDescription.section2.items3.description")}

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-[100%] flex  justify-center ">
        <div className=" w-[100%]  p-[80px] max-md:p-[30px] max-tab:p-[40px] max-w-[2000px]">
          <div className=" w-[100%] pb-[50px] flex  flex-col gap-[20px]">
            <div className=" lg:gap-[2%] flex  lg:flex-row flex-col w-[100%] mt-[50px] gap-[30px]">
              <div className=" lg:w-[50%] w-[100%] p-8  bg-light100 rounded-[10px] flex  flex-col gap-[30px]">
                <h3 className="text-sm font-bold font-[Outfit-Regular] max-md:text-center max-laptop:text-mf text-primary">
                {t("JobDescription.section3.title")}

                </h3>
                <ul>
                  <li className="list-item-red flex ">
                    <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                    {t("JobDescription.section3.points11")}

                    </p>{" "}
                  </li>
                  <li className="list-item-red flex ">
                    <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                    {t("JobDescription.section3.points12")}

                    </p>{" "}
                  </li>
                  <li className="list-item-red flex ">
                    <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                    {t("JobDescription.section3.points13")}

                    </p>{" "}
                  </li>
                  <li className="list-item-red flex ">
                    <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                    {t("JobDescription.section3.points14")}

                    </p>{" "}
                  </li>
                  <li className="list-item-red flex ">
                    <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                    {t("JobDescription.section3.points15")}

                    </p>{" "}
                  </li>
                </ul>
              </div>
              <div className=" lg:w-[50%] w-[100%] p-8  bg-light100 rounded-[10px] flex  flex-col gap-[30px]">
                <h3 className="text-sm font-bold font-[Outfit-Regular] max-md:text-center max-laptop:text-mf text-primary">
                {t("JobDescription.section4.title")}

                </h3>
                <ul>
                  <li className="list-item-red flex ">
                    <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                    {t("JobDescription.section4.points1")}

                    </p>{" "}
                  </li>
                  <li className="list-item-red flex ">
                    <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                    {t("JobDescription.section4.points2")}

                    </p>{" "}
                  </li>
                  <li className="list-item-red flex ">
                    <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                    {t("JobDescription.section4.points3")}

                    </p>{" "}
                  </li>
                  <li className="list-item-red flex ">
                    <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                    {t("JobDescription.section4.points4")}

                    </p>{" "}
                  </li>
                  <li className="list-item-red flex ">
                    <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                    {t("JobDescription.section4.points5")}

                    </p>{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="  bg-light100 flex flex-col gap-[30px] p-8 rounded-[10px]">
              <h3 className="text-sm font-bold font-[Outfit-Regular] max-md:text-center max-laptop:text-mf text-primary">
              {t("JobDescription.section5.title")}

              </h3>
              <ul>
                <li className="list-item-red flex ">
                  <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                  {t("JobDescription.section5.points6")}

                  </p>{" "}
                </li>
                <li className="list-item-red flex ">
                  <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                  {t("JobDescription.section5.points7")}

                  </p>{" "}
                </li>
                <li className="list-item-red flex ">
                  <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                  {t("JobDescription.section5.points8")}

                  </p>{" "}
                </li>
                <li className="list-item-red flex ">
                  <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                  {t("JobDescription.section5.points9")}

                  </p>{" "}
                </li>
                <li className="list-item-red flex ">
                  <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                  {t("JobDescription.section5.points10")}

                  </p>{" "}
                </li>
              </ul>
            </div>


          </div>
        </div>
      </div>
      <Joincomponent/>
      <Seemore/>
    </div>
  );
};

export default Stellenbeschreibung;
