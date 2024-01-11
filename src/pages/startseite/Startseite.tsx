import Flextop from "../../components/pageone/flextop/Flextop";
import ImageSlider from "../../components/slider/slider";
import Function from "../../components/pageone/function/Function";
import Schrit from "../../components/pageone/schrit/Schrit";
import Wecase from "../../components/pageone/wecase/Wecase";
import Industrien from "../../components/pageone/industrien/Industrien";
import Benifits from "../../components/pageone/benifits/Benifits";
import Dataprivacy from "../../components/pageone/dataprivacy/Dataprivacy";
import Feature from "../../components/pageone/feature/Feature";
import Casestudy from "../../components/pageone/case/Case";
import Supporter from "../../components/pageone/supporter/Supporter";
import Actnow from "../../components/pagetwo/actnow/Actnow";
import Press from "../../components/pageone/press/Press";
import { useTranslation } from "react-i18next";

const Startseite = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="max-w-[2000px] m-auto ">
        {/* <Header /> */}
      </div>
      <Flextop />
      <div className="w-full m-auto bg-light100 py-14 flex flex-col gap-6 px-[80px] max-tab:px-[40px] max-md:px-[30px]">
        <p className="text-center font-[Outfit-Regular] text-sm  max-tab:w-auto max-md:text-mf max-laptop:text-mf text-greyb">
        {t("startseite.intro")}
        </p>
        <ImageSlider />
        <div className="tick flex font-[Outfit-Regular] max-md:flex-col  justify-center max-tab:flex-wrap gap-10 max-md:gap-5 text-sm text-greyb max-laptop:text-mf">
          <p>{t("startseite.tick1")}</p>
          <p>{t("startseite.tick2")}</p>
          <p>{t("startseite.tick3")}</p>
        </div>
      </div>
      <div>
        <Function />
        <Schrit />
        <Wecase />
        <Industrien />
        <Benifits />
        <Dataprivacy />
        <Feature />
        <Casestudy />
        <Press />
        <Supporter />
        <Actnow />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Startseite;
