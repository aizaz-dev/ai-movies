import { FaArrowRightLong } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Unterseite = () => {
  const { t } = useTranslation();
  // Data for the sections
  const box = [
    {
      id: 1,
      logo: "pageone/casestudy/1.png",
      name: `${t("unterseite.box1.name")}`,
      des: `${t("unterseite.box1.des")}`,
      userpic: "pageone/casestudy/man1.png",
      username: `${t("unterseite.box1.username")}`,
      userinfo: `${t("unterseite.box1.userinfo")}`,
    },
    {
      id: 2,
      logo: "pageone/casestudy/2.png",
      name: `${t("unterseite.box2.name")}`,
      des: `${t("unterseite.box2.des")}`,
      userpic: "pageone/casestudy/man2.png",
      username: `${t("unterseite.box2.username")}`,
      userinfo: `${t("unterseite.box1.userinfo")}`,
    },
  ];

  return (
    <div className="w-full bg-ligh400 ">
      <div className="max-w-[2000px] mx-auto py-10 px-[80px] max-tab:px-[40px] max-md:px-[30px]">
        {/* Title for the section */}
        <h3 className="text-sm font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
          {t("unterseite.title")}
        </h3>
        {/* Subtitle for the section */}
        <h1 className="text-lg font-[Outfit-Bold] max-md:text-sm max-md:text-center max-laptop:text-lf ">
          {t("unterseite.subtitle")}
        </h1>

        {/* Section One */}
        <div className="flex bg-light100 py-14 px-11 mt-7  max-md:px-6 max-tab:flex-col rounded-[10px]">
          <div className="one w-[70%] max-tab:w-full flex items-center justify-center border-r-1 border-solid border-light300 max-tab:border-none">
            <p className="text-left text-sm font-[Outfit-Regular] pr-7 max-tab:pr-0  max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
              {t("unterseite.section1.content")}
            </p>
          </div>
          <div className="two w-[30%] max-tab:w-full py-14 px-11 flex items-center justify-center">
            <img src="/5.png" alt="" />
          </div>
        </div>

        {/* Section Two */}
        <div className="secflex flex max-tab:flex-col">
          <div className="left w-[50%] max-tab:w-full  flex items-center justify-center py-14 px-11  max-md:px-0 ">
            <p className="text-left text-sm font-[Outfit-Regular] pr-7 max-tab:pr-0  max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
              {t("unterseite.section2.contentLeft")}
            </p>
          </div>
          <div className="right w-[50%] max-tab:w-full py-14 px-13 flex items-center justify-center relative">
            <img
              src="/arrow.svg"
              alt=""
              className="absolute top-[25%] -left-6   w-[60px] h-[60px]"
            />
            <div className="colorbg bg-light100  py-14 px-11 rounded-[10px]">
              {" "}
              <p className="text-left text-sm font-[Outfit-Bold] pr-7 max-tab:pr-0  max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                {t("unterseite.section2.contentRight")}
              </p>
              <p className=" text-left text-sm font-[Outfit-Regular] pr-7 max-tab:pr-0  max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start mt-7 text-light200">
                {t("unterseite.section3.content")}
              </p>
              <img
                src="/arrow2.svg"
                alt=""
                className="absolute -right-4 bottom-[35%] w-[60px] h-[60px]"
              />
            </div>
          </div>
        </div>

        {/* Section Three */}
        <div className="component3 mt-7 flex items-center justify-center max-tab:flex-col">
          <div className="  px-11 max-md:px-0    flex items-center justify-center w-fit ">
            <img
              src="/farber.png"
              alt=""
              className=" w-[500px]   object-cover"
            />
          </div>
          <div className="righttxt leftimg px-7 max-tab:mt-7  max-md:px-0  w-fit ">
            <p className="text-left  text-sm font-[Outfit-Regular]  max-tab:pr-0  max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
              {t("unterseite.section4.contentLeft")}
            </p>
          </div>
        </div>

        {/* Section Four */}
        <div className="mt-[90px]  ">
          <div className="max-w-[2000px] mx-auto">
            <h3 className="text-sm font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
              {t("unterseite.section5.title")}
            </h3>
            <h1 className="text-lg font-[Outfit-Bold]  max-md:text-sm max-md:text-center max-laptop:text-lf ">
              {t("unterseite.section5.subtitle")}
            </h1>
            <div className="w-[100%] flex justify-start   max-tab:flex-col lg:gap-8 gap-6 items-start mt-[60px]">
              {box.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="  bg-light100 w-[35%] shadow-md max-tab:w-full h-fit rounded-[10px] p-6"
                  >
                    {/* Box Logo */}
                    <div className="flex m-6 items-center object-cover ">
                      <img src={item.logo} alt="" width="300px" />
                    </div>
                    {/* Divider Line */}
                    <div className=" w-[90%] border-b-[1px] ml-2 border-b-gray-300 mb-[30px]"></div>
                    {/* Box Name */}
                    <div className="text-sm   font-bold font-[Outfit-Bold] max-md:text-left max-laptop:text-mf">
                      {item.name}
                    </div>
                    {/* Box Description */}
                    <div className="text-sm max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start">
                      {item.des}
                    </div>
                    {/* Button */}
                    <button className="text-sm float-right text-primary  font-[Outfit-Bold] max-md:text-left max-laptop:text-mf mt-[30px] whitespace-nowrap flex items-center justify-start gap-2 py-[15px] rounded-[10px] max-md:text-[14px] ">
                      {t("unterseite.section5.buttonText")}
                      <FaArrowRightLong />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div>
        <div>
          <div>
            {/*  */}
            <div className="w-full m-auto bg-light100">
              <div className="max-w-[2000px] w-[100%] lg:flex-col flex flex-col py-[80px] max-md:py-[30px] lg:px-[80px] px-[30px]  gap-[50px] ">
                <div className="text-lg font-[Outfit-Bold] max-md:text-sm max-md:text-center max-laptop:text-lf ">
                  Überzeugen Sie sich vom Ergebnis
                </div>
                <div className=" w-full mx-auto flex gap-10 lg:flex-row-reverse flex-col-reverse  ">
                  <div className="w-[500px] text-dark100 flex flex-col">
                    {/* Video Explanation Title */}
                    <h1 className="text-sm font-bold font-[Outfit-Bold] text-dark100 max-md:text-center max-laptop:text-mf">
                      Wie ist dieses Video entstanden?
                    </h1>
                    {/* Video Explanation Content */}
                    <p className="text-sm font-[Outfit-Regular] text-dark100 max-md:text-center max-laptop:text-mf">
                      Die Grundlage für dieses Video ist ein einfacher
                      Eingabetext, den der Kunde unserer KI-Software
                      bereitgestellt hat.
                    </p>
                    {/* Show Input Text Button */}
                    <div className="bg-light400 mt-8 text-primary border-[3px] border-primary [font-family:Outfit-Bold] rounded-[10px] px-[24px] py-[8px] lg:text-sm text-xs w-fit h-fit ">
                      Eingabetext anzeigen
                    </div>
                  </div>
                  {/* Video Display */}
                  <div className=" w-full p-3 ">
                    <video
                      className="w-full object-cover m-auto"
                      autoPlay
                      muted
                    >
                      <source
                        className="w-full h-full"
                        src="./flexvid/vid.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Section */}
            <div className="max-w-[2000px] w-[100%] lg:flex-col flex flex-col py-[80px] max-md:py-[30px] lg:px-[80px] px-[30px] mt-[80px]">
              {/* Additional Section Title */}
              <h3 className="text-sm font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
                {t("unterseite.act.title")}
              </h3>
              {/* Additional Section Subtitle */}
              <h1 className="text-lg font-[Outfit-Bold]  max-md:text-sm max-md:text-center max-laptop:text-lf max-md:leading-7">
                {t("unterseite.act.subtitle")}
              </h1>
              {/* Additional Section Description */}
              <p className="text-sm font-[Outfit-Regular]  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
                {t("unterseite.act.des")}
              </p>
              {/* Buttons for Additional Section */}
              <div className="button flex max-md:flex-col max-md:gap-3  gap-8">
                <button className="text-primary text-sm max-laptop:text-mf font-bold border-[2px] border-solid border-primary py-[10px] px-[15px] rounded-[10px] mt-6 max-md:text-[14px] whitespace-nowrap max-md:mx-auto">
                  {t("unterseite.act.button1")}
                </button>
                <button className="text-light400 bg-primary text-sm max-laptop:text-mf font-bold border-[2px] border-solid border-primary py-[10px] px-[15px] rounded-[10px] mt-6 max-md:mt-0 max-md:text-[14px] whitespace-nowrap max-md:mx-auto">
                  {t("unterseite.act.button2")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unterseite;
