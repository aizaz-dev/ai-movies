import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="max-w-[2000px] mx-auto  w-[100%] flex flex-col lg:px-[80px] px-[20px] pt-[50px]">
      <div className="lg:text-sm text-xs font-[Outfit-Bold] text-primary">
        GET IN TOUCH
      </div>
      <div className="xl:text-lg lg:text-md text-m2d text font-[Outfit-Bold] ">
        Senden Sie uns eine E-Mail
      </div>
      <div className="w-[100%] flex lg:flex-row md:flex-row flex-col lg:p-8 p-4  pb-3 ">
        <div className="lg:w-[50%] md:w-[60%] w-[100%] flex flex-col !gap-[20px]">
          <input
            type="text*"
            className=" bg-light200 w-full py-3 px-6 rounded-[10px] placeholder:text-black lg:text-sm text-xs font-[Outfit-Regular] text-primary"
            placeholder="Name*"
          />
          <input
            type="text*"
            className=" bg-light200 w-full py-3 px-6 rounded-[10px] placeholder:text-black lg:text-sm text-xs font-[Outfit-Regular] text-primary"
            placeholder="E-Mail*"
          />
          <input
            type="text*"
            className=" bg-light200 w-full py-3 px-6 rounded-[10px] placeholder:text-black lg:text-sm text-xs font-[Outfit-Regular] text-primary"
            placeholder="Telefonnummer"
          />
          <input
            type="text*"
            className=" bg-light200 w-full py-3 px-6 rounded-[10px] placeholder:text-black lg:text-sm text-xs font-[Outfit-Regular] text-primary"
            placeholder="Unternehmen*"
          />
          <input
            type="text*"
            className=" bg-light200 w-full py-3 px-6 rounded-[10px] placeholder:text-black lg:text-sm text-xs font-[Outfit-Regular] text-primary"
            placeholder="Nachricht*"
          />
        </div>
        <div className="lg:w-[50%] md:w-[50%] w-full lg:pl-[50px] gap-3 md:pl-[60px]  flex flex-col">
          <div className="flex flex-col pt-2">
            <div className="lg:text-sm text-xs font-[Outfit-Bold] text-primary">
              ADDRESS
            </div>
            <div className="lg:text-sm text-xs font-[Outfit-Regular] text-black">
              FAST AI Movies
            </div>
            <div className="lg:text-sm text-xs font-[Outfit-Regular] text-black">
              Zwieselster.3a
            </div>
            <div className="lg:text-sm text-xs font-[Outfit-Regular] text-black">
              83278 Traunstein
            </div>
          </div>

          <div className="flex flex-col pt-2">
            <div className="lg:text-sm text-xs font-[Outfit-Bold] text-primary">
              MAIL
            </div>
            <div className="lg:text-sm text-xs font-[Outfit-Regular] text-black">
              info@fast-ai-movies.com
            </div>
          </div>

          <div className="flex flex-col pt-2">
            <div className="lg:text-sm text-xs font-[Outfit-Bold] text-primary">
              SOCIAL
            </div>
            <div className="flex gap-[10px] bg-primary w-fit p-2 rounded-md mt-1">
              <div className="bg-white rounded-sm p-[4px]">
                <FaFacebookF className="text-primary text-[18px]" />
              </div>
              <div className="bg-white rounded-sm p-[4px]">
                <FaLinkedinIn className="text-primary text-[18px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[50%] md:w-[60%] w-[100%] flex !gap-[20px] lg:p-8 p-4  pb-3">
        <label className="flex  space-x-2 rounded-lg">
          <input
            type="checkbox"
            className="form-checkbox h-7 w-7 text-blue-500 rounded-lg"
          />
          <span className="text-gray-700 rounded-lg"></span>
        </label>
        <div className="text-xs font-[Outfit-Regular] text-primary">
          Ich habe Die Datenschutzeerklarung gelesen. Ich bin damit
          enverstanden, dass meine Angaben und daten zur Beantwortang meiner
          Anfrog elektronisch erfasst und gespeichert werden. Hinweis: sei
          konnen ihre Einwilligung jederzeit fur die Zukunft per E-mail an
          info@fast-ai-movies.com widerrufen
        </div>
      </div>
      <div className="lg:w-[45%] md:w-[45%] w-full flex justify-end mt-4 ">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg  w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:text-sm text-xs font-[Outfit-Bold] "
        >
          Abschicken
        </button>
      </div>
    </div>
  );
};

export default Contact;
