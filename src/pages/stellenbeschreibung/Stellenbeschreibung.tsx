import { PiNoteDuotone } from "react-icons/pi";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Stellenbeschreibung = () => {
  const news = [
    {
      id: 1,
      video: "/stell/card1.png",
      name: "Die Zakunft gehort ihm: Das interview mit dem 19-jahrigen AI-Startup-Grunder Florian Scherl",
      p: "Florian Scherl telt in diesem video seine Erfahrungen erzahlt, wie er zur Grundung seines AL-Startups kam. Dieses Interview ist ein Muss fur alle Technologie begeisterten,  kunstlichen Imtelligenz erfarhren mochten.",
    },
    {
      id: 2,
      video: "/stell/card2.png",
      name: "Revolution of AI Video Generation with FAST AI Movies| AI E-Lab Success Stories",
      p: "Florian Scherl, ein 19-jahriger Grunder und CEO von Fast AI Movies, spricht uber seine Startup-Reise als junger und erfolgreicher Unternehmer mit Launrenz Sommerlad von Europas fuhrender Studenteninitiative TUM.ai.",
    },
    {
      id: 3,
      video: "/stell/card3.png",
      name: "AI meets EdTecH - Welche Rolle spielt Kunstliche Intelligenz in der Bildungsbranche?",
      p: "Zusammen mit Founders Foundation richtete KI.NRW am 15.Mai 2023 das erste KI Meetup NRW aus. Mit fuhrenden Expert*innen aus der EdTech-Branche ging es bie dem Netzwerk-Event,  fur Lehrende und Lernende ergeben konnen.",
    },
    {
      id: 5,
      video: "/stell/card1.png",
      name: "Die Zakunft gehort ihm: Das interview mit dem 19-jahrigen AI-Startup-Grunder Florian Scherl",
      p: "Florian Scherl telt in diesem video seine Erfahrungen erzahlt, wie er zur Grundung seines AL-Startups kam. Dieses Interview ist ein Muss fur alle Technologie begeisterten, welt der kunstlichen  erfarhren mochten.",
    },
    {
      id: 5,
      video: "/stell/card2.png",
      name: "Revolution of AI Video Generation with FAST AI Movies| AI E-Lab Success Stories",
      p: "Florian Scherl, ein 19-jahriger Grunder und CEO von Fast AI Movies, spricht uber seine Startup-Reise als junger und erfolgreicher Unternehmer mit Launrenz Sommerlad von Europas fuhrender Studenteninitiative TUM.ai.",
    },
    {
      id: 6,
      video: "/stell/card3.png",
      name: "AI meets EdTecH - Welche Rolle spielt Kunstliche Intelligenz in der Bildungsbranche?",
      p: "Zusammen mit Founders Foundation richtete KI.NRW am 15.Mai 2023 das erste KI Meetup NRW aus. Mit fuhrenden Expert*innen aus der EdTech-Branche ging es bie dem Netzwerk-Event,  und welche Chance  ergeben konnen.",
    },
    {
      id: 7,
      video: "/stell/card1.png",
      name: "Die Zakunft gehort ihm: Das interview mit dem 19-jahrigen AI-Startup-Grunder Florian Scherl",
      p: "Florian Scherl telt in diesem video seine Erfahrungen erzahlt, wie er zur Grundung seines AL-Startups kam. Dieses Interview ist ein Muss fur alle Technologie begeisterten,  kunstlichen Imtelligenz erfarhren mochten.",
    },
    {
      id: 8,
      video: "/stell/card2.png",
      name: "Revolution of AI Video Generation with FAST AI Movies| AI E-Lab Success Stories",
      p: "Florian Scherl, ein 19-jahriger Grunder und CEO von Fast AI Movies, spricht uber seine Startup-Reise als junger und erfolgreicher Unternehmer mit Launrenz Sommerlad von Europas fuhrender Studenteninitiative TUM.ai.",
    },
    {
      id: 9,
      video: "/stell/card3.png",
      name: "AI meets EdTecH - Welche Rolle spielt Kunstliche Intelligenz in der Bildungsbranche?",
      p: "Zusammen mit Founders Foundation richtete KI.NRW am 15.Mai 2023 das erste KI Meetup NRW aus. Mit fuhrenden Expert*innen aus der EdTech-Branche ging es bie dem Netzwerk-Event,  fur Lehrende und Lernende ergeben konnen.",
    },
    {
      id: 10,
      video: "/stell/card1.png",
      name: "Die Zakunft gehort ihm: Das interview mit dem 19-jahrigen AI-Startup-Grunder Florian Scherl",
      p: "Florian Scherl telt in diesem video seine Erfahrungen erzahlt, wie er zur Grundung seines AL-Startups kam. Dieses Interview ist ein Muss fur alle Technologie begeisterten,  kunstlichen Imtelligenz erfarhren mochten.",
    },
    {
      id: 11,
      video: "/stell/card2.png",
      name: "Revolution of AI Video Generation with FAST AI Movies| AI E-Lab Success Stories",
      p: "Florian Scherl, ein 19-jahriger Grunder und CEO von Fast AI Movies, spricht uber seine Startup-Reise als junger und erfolgreicher Unternehmer mit Launrenz Sommerlad von Europas fuhrender Studenteninitiative TUM.ai.",
    },
    {
      id: 12,
      video: "/stell/card3.png",
      name: "AI meets EdTecH - Welche Rolle spielt Kunstliche Intelligenz in der Bildungsbranche?",
      p: "Zusammen mit Founders Foundation richtete KI.NRW am 15.Mai 2023 das erste KI Meetup NRW aus. Mit fuhrenden Expert*innen aus der EdTech-Branche ging es bie dem Netzwerk-Event,  welche Chance sich daduranch  ergeben konnen.",
    },
  ];

  return (
    <div className="max-w-[2000px] mx-auto  w-[100%] flex flex-col lg:px-[80px] px-[20px] pt-[50px]">
      <div className="lg:text-sm text-xs font-[Outfit-Bold] text-primary">
        News
      </div>
      <div className="xl:text-lg lg:text-md text-m2d text font-[Outfit-Bold] ">
        FAST AI Movies in den Medien
      </div>
      <div className="w-[100%] flex gap-[20px] bg-light100 lg:my-[30px] md:my-[20px] my-[10px] rounded-l-3xl mr-[30px] items-center">
        <div className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px] outline-primary outline rounded-full bg-white justify-center flex items-center">
          <div className="text-5xl ">
            <PiNoteDuotone />{" "}
          </div>
        </div>
        <div className="lg:text-sm text-xs font-[Outfit-Bold]  text-primary">
          Artikel
        </div>
      </div>
      {news.map((item) => {
        return (
          <div key={item.id} className="w-[100%] flex-col">
            <div className="w-[100%] md:flex-row flex flex-col   lg:p-4 md:p-3 p-1 gap-[20px] ">
              <div className="xl:min-w-[450px] xl:max-w-[450px] lg:min-w-[390px] lg:max-w-[390px]  h-[auto] md:min-w-[270px]  w-[100%]  rounded-[15px] ">
                <img src={item.video} />
              </div>
              <div className="flex flex-col gap-[20px] lg:p-[20px] md:p[8px] p-[5px] md:w-[auto] w-[100%]  h-[auto] ">
                <div className="lg:text-sm text-xs font-[Outfit-Bold]  text-[black]">
                  {item.name}
                </div>
                <div className="lg:text-sm text-xs font-[Outfit-Regular] xl:pr-[50px]  text-[black]">
                  {item.p}
                </div>
                <div className="lg:text-sm text-xs font-[Outfit-Bold]  text-primary flex items-center gap-[20px]">
                  Artikel lesen
                  <div className="lg:pt-[5.5px] md:pt-[6px] pt-[4px] ">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="w-[100%] flex gap-[20px] bg-light100 lg:my-[30px] md:my-[20px] my-[10px] rounded-l-3xl mr-[30px] items-center">
        <div className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px] outline-primary outline rounded-full bg-white justify-center flex items-center">
          <div className="text-3xl ">
            <MdOutlineKeyboardVoice />{" "}
          </div>
        </div>
        <div className="lg:text-sm text-xs font-[Outfit-Bold]  text-primary">
          Podcast
        </div>
      </div>
      <div className="lg:flex-row md:flex-row flex-col h-auto pb-2 flex gap-[40px]">
        <div className="flex flex-col xl:w-[450px] lg:w-[300px] md:w-[250px] w-[100%] lg:pl-8 md:pl-6 pl-3 gap-[20px]">
          <div className="lg:text-sm text-xs font-[Outfit-Bold]  text-[black] flex items-center gap-[20px]">
            #28// Learn from an interpreneur: Florian Scherl, Founder at FAST AI
            Movies
          </div>
          <div className="lg:text-sm text-xs font-[Outfit-Regular]  text-[black] flex items-center gap-[20px]">
            In this week's episode, Antonie meets Florian Scherl founder of FAST
            AI Movies. Florian founded his company while being 17 years old and
            still being a pupil. Florian takes us on his journey of how he
            learned coding identified the opportunity for FAST AI Movies, but
            also of the importance of intensly listening of what your
            customerwant.
          </div>
          <div className="lg:text-sm text-xs font-[Outfit-Bold]  text-primary flex items-center gap-[20px]">
            Video anschauen
            <div className="lg:pt-[5.5px] md:pt-[6px] pt-[4px] ">
              {" "}
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="flex flex-col  lg:w-[300px] md:w-[250px] w-[100%] lg:pl-8 md:pl-6 pl-3 gap-[20px]">
          <div className="lg:text-sm text-xs font-[Outfit-Bold]  text-[black] flex items-center gap-[20px]">
            Florian Scherl, Founder at FAST AI Movies
          </div>
          <div className="lg:text-sm text-xs font-[Outfit-Regular]  text-[black] flex items-center gap-[20px]">
            Despite Florian's age he is advancing very fast in AI and business.
            At 13 years old he taught himself programming and then AI. In our
            chat today we talk about Florian's unique journey into his passion
            for AI.
          </div>
          <div className="lg:text-sm text-xs font-[Outfit-Bold]  text-primary flex items-center gap-[20px]">
            Video anschauen
            <div className="lg:pt-[5.5px] md:pt-[6px] pt-[4px] pl-[2px]">
              {" "}
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] flex gap-[20px] bg-light100 lg:my-[30px] md:my-[20px] my-[10px] rounded-l-3xl mr-[30px] items-center">
        <div className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px] outline-primary outline rounded-full bg-white justify-center flex items-center">
          <div className="text-3xl">
            <FaPhotoVideo />{" "}
          </div>
        </div>
        <div className="lg:text-sm text-xs font-[Outfit-Bold]  text-primary">
          Video
        </div>
      </div>
      <div className="flex lg:pl-[40px] md:p-4 p-3 ">
        <div className="xl:min-w-[450px] xl:max-w-[450px] lg:min-w-[390px] lg:max-w-[390px]  h-[auto] md:min-w-[270px]  w-[100%]  rounded-[15px]">
          <img src="/stell/card1.png"></img>
        </div>
        <div className="flex flex-col lg:pl-8 pl-4  lg:pt-5 pt-4 gap-[20px]">
          <div className="lg:text-sm text-xs font-[Outfit-Bold]  text-[black] flex items-center gap-[20px]">
            FAST AI Movies | Vorstelling | Campus Founder
          </div>
          <div className="lg:text-sm text-xs font-[Outfit-Bold]  text-primary flex items-center gap-[20px]">
            Video anschauen
            <div className="lg:pt-[10px] md:pt-[6px] pt-[4px] ">
              {" "}
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:pl-[40px] md:pl-[25px] pl-[10px]  ">
        <div className="xl:min-w-[450px] xl:max-w-[450px] lg:min-w-[390px] lg:max-w-[390px]  h-[auto] md:min-w-[270px]  w-[100%]  rounded-[15px] ">
          <img src="/stell/card1.png"></img>
        </div>
        <div className="flex flex-col lg:pl-8 pl-4  lg:pt-5 pt-4 gap-[20px]">
          <div className="lg:text-sm text-xs font-[Outfit-Bold]  text-[black] flex items-center gap-[20px]">
            FAST Movies | Demo Day | KI Garage
          </div>
          <div className="lg:text-sm text-xs font-[Outfit-Bold]  text-primary flex items-center gap-[20px]">
            Video anschauen
            <div className="lg:pt-[10px] md:pt-[6px] pt-[4px] ">
              {" "}
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stellenbeschreibung;
