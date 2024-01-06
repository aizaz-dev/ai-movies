import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsSend } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#0d1c5a] flex flex-col lg:px-[80px] px-[20px] max-w-[2000px] w-[100%]">
      <div className="flex h-fit">
        <img className="w-[200px] h-fit" src="/white.svg" alt="" />
      </div>
      <div className="flex md:flex-row justify-between gap-[30px] flex-col">
        <div className="flex flex-wrap gap-[60px]">
          <div className="flex flex-col gap-1">
            <div className="lg:text-sm text-xs font-[Outfit-Bold]  text-[white]">
              Schnell Finden
            </div>
            <div className="lg:text-sm text-xs font-[Outfit-Regular]  text-light200">
              Case Studies
            </div>
            <div className="lg:text-sm text-xs font-[Outfit-Regular]  text-light200">
              Über uns
            </div>
            <div className="lg:text-sm text-xs font-[Outfit-Regular]  text-light200">
              Kontakt
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="lg:text-sm text-xs font-[Outfit-Bold]  text-[white]">
              Rechtliches
            </div>
            <div className="lg:text-sm text-xs font-[Outfit-Regular]  text-light200">
              Impressum
            </div>
            <div className="lg:text-sm text-xs font-[Outfit-Regular]  text-light200">
              Datenschutz
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="lg:text-sm text-xs font-[Outfit-Bold]  text-[white]">
              Weiterführende
            </div>
            <div className="lg:text-sm text-xs font-[Outfit-Regular]  text-light200">
              Kontakt
            </div>
            <div className="lg:text-sm text-xs font-[Outfit-Regular]  text-light200">
              FAQ
            </div>
            <div className="lg:text-sm text-xs font-[Outfit-Regular]  text-light200">
              Jobs
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="lg:text-sm text-xs font-[Outfit-Bold]  text-[white]">
              Social
            </div>
            <div className="lg:text-sm text-xs font-[Outfit-Regular]  text-light200">
              News
            </div>
            <div className="lg:text-sm text-xs font-[Outfit-Regular]  text-light200">
              Blog
            </div>
            <div className="flex gap-[10px]">
              <div className="bg-white rounded-sm p-[4px]">
                <FaFacebookF className="text-[#0d1c5a] text-[18px]" />
              </div>
              <div className="bg-white rounded-sm p-[4px]">
                <FaLinkedinIn className="text-[#0d1c5a] text-[18px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="lg:text-sm text-xs font-[Outfit-Bold]  text-[white]">
            Nichts mehr verpassen!
          </div>
          <div className="lg:text-sm text-xs font-[Outfit-Regular]  text-[white]">
            Registrieren Sie sich für unseren Newsletter!
          </div>
          <input
            className="text-sm text-white w-fit px-[20px] py-[10px] my-1 border-[3px] border-white rounded-md bg-transparent"
            placeholder="E-Mail Address"
            type="text"
          />
          <div className=" text-xs font-[Outfit-Regular]  text-light200">
            Mit klicken auf Abonnieren <br />
            stimmen Sie unseren <br />
            Datenschutzbestimmungen zu
          </div>
          <div className="lg:text-sm text-xs gap-2 font-[Outfit-Bold]  text-primary flex items-center px-[24px] py-[8px] bg-light200 rounded-md w-fit ">
            <BsSend />
            Aboneirene
          </div>
        </div>
      </div>
      <div>
        <select
          name=""
          id=""
          className="rounded-md px-[24px] py-[8px] font-[Outfit-Bold]"
        >
          <option value="English">English</option>
          <option value="German">German</option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
