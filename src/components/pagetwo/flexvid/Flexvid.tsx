
const Flexvid = () => {
  return (
    <div className="w-full m-auto">
      <div className=" bg-[url('./flexvid/bg.png')] bg-cover w-[100%] lg:flex-row flex flex-col items-center justify-center py-[80px] max-md:py-[30px] px-[80px] max-laptop:px-0 gap-[4%] ">
        <div className="max-w-[2000px] w-full mx-auto flex  flex-row-reverse gap-[60px] justify-between   items-center px-[40px]  max-lg:p-[40px] max-md:p-[25px]">
          <div className="w-full  text-white flex flex-col">
            <h1 className=" text-left text-lg font-[Outfit-Bold] leading-[60px] max-md:text-sm max-md:leading-8 max-md:text-center">
              Hier steht eine <br /> Headline
            </h1>
            <p className=" text-left text-sm max-laptop:text-mf font-[Outfit-Regular] max-laptop:w-[436px] max-md:w-auto max-md:text-center max-md:text-mf mt-[8px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam
            </p>
          </div>
          <div className=" w-full lg:flex hidden">
            <video className=" object-cover m-auto" autoPlay muted>
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
  );
};

export default Flexvid;
