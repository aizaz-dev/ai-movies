import React from "react";
import Joincomponent from "../../components/Stellenbeschreibung/joincomponent/Joincomponent";
import Seemore from "../../components/Stellenbeschreibung/seemore/Seemore";

const Stellenbeschreibung = () => {
  return (
    <div className="">
      <div className=" w-full max-w-[2000px] mx-auto mt-[10px] max-tab:mt-[40px]  p-[80px] max-md:p-[30px] max-tab:p-[40px]">
        <div className=" ">
          <h1 className="text-lg font-[Outfit-Bold]  max-md:text-sm max-md:text-center max-laptop:text-lf">
            Project Study in Business Development
          </h1>
          <h3 className="text-sm font-bold font-[Outfit-Regular] max-md:text-center max-laptop:text-mf">
            (compliance/legal market segment)
          </h3>
          <div className=" font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start mt-[50px]">
            FAST AI Movies is looking for motivated TUM students that want to
            carry out a project study in <br /> the field of Business
            Development (developing new market opportunity for compliance
            training <br /> videos) to get our video creation AI software to the
            next level!
          </div>
        </div>
      </div>

      <div className=" w-[100%]  flex  justify-center bg-light100  ">
        <div className=" w-[100%] max-w-[2000px] mx-auto  p-[80px] max-md:p-[30px] max-tab:p-[40px]">
          <div className=" flex  flex-col gap-[20px] mt-[50px]">
            <h3 className=" text-sm font-bold font-[Outfit-Bold] max-md:text-center max-laptop:text-mf text-primary">
              WARUM FAST AI MOVIES?
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
                    Wachsendes Startup
                  </h3>
                  <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start ">
                    mit spannenden Einblicken
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
                  Echten Impact haben
                  </h3>
                  <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start ">
                  in einem kleinen Team
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
                  Hoch innovative
                  </h3>
                  <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start ">
                  KI-Technologie
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
                  DEINE ROLLE
                </h3>
                <ul>
                  <li className="list-item-red flex ">
                    <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                      Identify a new market segment <br /> (compliance training/
                      legal training){" "}
                    </p>{" "}
                  </li>
                  <li className="list-item-red flex ">
                    <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                      Use Design Thinking methods to identify new market
                      opportunities.{" "}
                    </p>{" "}
                  </li>
                  <li className="list-item-red flex ">
                    <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                      Conduct market research to identify the innovators.{" "}
                    </p>{" "}
                  </li>
                  <li className="list-item-red flex ">
                    <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                      Research relevant market players{" "}
                    </p>{" "}
                  </li>
                  <li className="list-item-red flex ">
                    <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                      Work independently and manage
                    </p>{" "}
                  </li>
                </ul>
              </div>
              <div className=" lg:w-[50%] w-[100%] p-8  bg-light100 rounded-[10px] flex  flex-col gap-[30px]">
                <h3 className="text-sm font-bold font-[Outfit-Regular] max-md:text-center max-laptop:text-mf text-primary">
                  SKILLS UND EXPERTISE
                </h3>
                <ul>
                  <li className="list-item-red flex ">
                    <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                      Identify a new market segment <br /> (compliance training/
                      legal training){" "}
                    </p>{" "}
                  </li>
                  <li className="list-item-red flex ">
                    <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                      Use Design Thinking methods to identify new market
                      opportunities.{" "}
                    </p>{" "}
                  </li>
                  <li className="list-item-red flex ">
                    <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                      Conduct market research to identify the innovators.{" "}
                    </p>{" "}
                  </li>
                  <li className="list-item-red flex ">
                    <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                      Research relevant market players{" "}
                    </p>{" "}
                  </li>
                  <li className="list-item-red flex ">
                    <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                      Work independently and manage
                    </p>{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="  bg-light100 flex flex-col gap-[30px] p-8 rounded-[10px]">
              <h3 className="text-sm font-bold font-[Outfit-Regular] max-md:text-center max-laptop:text-mf text-primary">
                YOUR PROJECT STUDY
              </h3>
              <ul>
                <li className="list-item-red flex ">
                  <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                    Start date: as soon as possible
                  </p>{" "}
                </li>
                <li className="list-item-red flex ">
                  <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                    Regular 1:1 with FAST AI Movies CEO
                  </p>{" "}
                </li>
                <li className="list-item-red flex ">
                  <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                    If you have fellow students, bring them on board!
                  </p>{" "}
                </li>
                <li className="list-item-red flex ">
                  <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                    We provide a rough structure but inside this structure, you
                    can work completely independently.
                  </p>{" "}
                </li>
                <li className="list-item-red flex ">
                  <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                    We have our own office at TUM Incubator in Garching. If you
                    want you can work mostly remotely, but we will organize a
                    few office days anyway, since nothing beats meeting
                    physically regularly and exchanging ideas.
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
