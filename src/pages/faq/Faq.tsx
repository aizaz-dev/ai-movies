import CustomButton from "../../components/CustomButton";

const Faq = () => {
  return (
    <div className="">
      <div className="w-[100%] px-[20px] py-[50px] lg:px-[80px]  bg-light100">
        <div className="xl:text-lg lg:text-md text-m2d text font-[Outfit-Bold]">
          FAQ
        </div>
        <div className="flex max-sm:flex-col">
          <div className="h-auto w-[500px] max-sm:w-full border-[2px] border-gray-100 shadow-md mt-6 rounded-[5px] bg-white  sm:w-full ">
            <div className="w-full bg-light200 flex items-center px-8 py-2 rounded-t-[5px] lg:text-sm text-xs font-[Outfit-Bold] text-primary">
              Mus ich eine kamplette prasentation erstelien?
            </div>
            <div className="w-full bg-white flex items-center px-8 py-2 rounded-t-[5px] lg:text-sm text-xs font-[Outfit-Regular] text-black">
              Muss ein vollstandiges drehbuch schreibn?
            </div>
            <div className="w-full bg-white flex items-center px-8 py-2 rounded-t-[5px] lg:text-sm text-xs font-[Outfit-Regular] text-black ">
              In weschen sprachen konnen schulungsvideos erstellt werden?
            </div>
            <div className="w-full bg-white flex items-center px-8 py-2 rounded-t-[5px] lg:text-sm text-xs font-[Outfit-Regular] text-black">
              Sindie schulungsvideos interaktive?
            </div>
            <div className="w-full bg-white flex items-center px-8 py-2 rounded-t-[5px] lg:text-sm text-xs font-[Outfit-Regular] text-black ">
              wie lange daurt die videoerstellung?
            </div>
          </div>
          <div className=" mt-10 ml-6 w-full flex px-8 py-2 rounded-t-[5px] lg:text-sm text-xs font-[Outfit-Regular] text-black ">
            Nein Sie mussen ledigklich einen korzen text ,der aus eingine <br />
            Stichpunkten besteht erstelien. Die paresantation erstellt unsere KI{" "}
            <br />
            Software fur Sie.{" "}
          </div>
        </div>
      </div>
      <div className="w-[100%] px-[20px] py-[50px] lg:px-[80px]">
        <div className="xl:text-lg lg:text-md text-m2d text font-[Outfit-Bold]">
          Ist eine Frage often geblieben ?
        </div>
        <div className="w-full flex py-2 rounded-t-[5px] lg:text-sm text-xs font-[Outfit-Regular] text-black ">
          wie lange daurt die videoerstellung?
        </div>
        <CustomButton
          type="filledBlue"
          title="Frage stellen"
        />
      </div>
    </div>
  );
};

export default Faq;
