import React from "react";

const CircleWithNumber = ({ number }) => (
  <div className="flex flex-col max-tab:mt-6 text-center max-xtab:hidden">
    <div className="bg-white w-[180px] h-[180px] rounded-full border-2 border-solid border-blue-700 flex items-center justify-center relative">
      <span className="text-primary text-[60px]">{number}</span>
    </div>
  </div>
);

const LineBetweenCircles = () => (
  <div className="flex-grow h-[2px] max-xtab:hidden  bg-primary mt-[0%]" />
);

const NumCircles = () => {
  const data = [1, 2, 3, 4, 5];

  return (
    <div className="bg-light100 p-[80px] max-md:p-[30px] max-tab:p-[40px]">
      <div className="max-w-[2000px] mx-auto text-center">
        <div className="text-sm font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
          DATA PRIVACY
        </div>
        <div className="text-lg font-bold max-md:text-sm max-md:text-center max-laptop:text-lf">
          Unser Prozess Datensicherheit
        </div>
      </div>
      <div className="lg:flex lg:flex-row  justify-center items-center lg:mt-[70px] max-w-[2000px] mx-auto">
        {data.map((number, index) => (
          <React.Fragment key={index}>
            <CircleWithNumber number={number} />
            {index < data.length - 1 && <LineBetweenCircles />}
          </React.Fragment>
        ))}
      </div>
      <div className="flex mt-4 justify-between  items-start max-w-[2000px] mx-auto max-tab:flex-col max-tab:gap-7">
<div className="one w-[14%] max-tab:w-full flex flex-col  justify-center text-start">
  <h3 className="text-sm font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">Dateneingabe </h3>
  <p className="text-sm font-[Outfit-Regular]  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px] max-tab:mt-0">Bei uns beginnt der Datenschutz schon bei der Eingabe Ihrer Daten. Sie geben Ihre Daten direkt in unsere benutzerfreundliche Webapp ein. Wir legen großen Wert darauf, dass dieser erste Schritt sicher und intuitiv ist.</p>
</div>
<div className="two w-[14%] max-tab:w-full flex flex-col  justify-center text-start">
  <h3 className="text-sm font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">Sichere Übertragung </h3>
  <p className="text-sm font-[Outfit-Regular]  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px] max-tab:mt-0">Sobald Sie Ihre Daten eingeben, werden diese verschlüsselt und sicher an einen Server in Deutschland übertragen. Diese Verschlüsselung garantiert, dass Ihre Daten während der Übertragung vor unerlaubten Zugriffen geschützt sind.</p>
</div>
<div className="three w-[14%] max-tab:w-full flex flex-col  justify-center text-start">
  <h3 className="text-sm font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">Interne Verarbeitung  </h3>
  <p className="text-sm font-[Outfit-Regular]  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px] max-tab:mt-0"> Nach der Übertragung kommen unsere fortschrittlichen KI-Modelle zum Einsatz. Diese Modelle, die wir ohne die OpenAI API entwickelt haben, verarbeiten Ihre Daten streng datenschutzkonform. Ihre Privatsphäre ist bei uns in guten Händen.</p>
</div>
<div className="four w-[14%] max-tab:w-full flex flex-col  justify-center text-start">
  <h3 className="text-sm font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">Speicherort des Videos</h3>
  <p className="text-sm font-[Outfit-Regular]  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px] max-tab:mt-0">Die von uns erstellten Videos werden auf einem sicheren Server in Deutschland gespeichert. Dies stellt sicher, dass Ihre Daten stets unter der strengen deutschen Datenschutzgesetzgebung verbleiben.</p>
</div>
<div className="five w-[14%] max-tab:w-full flex flex-col  justify-center text-start">
  <h3 className="text-sm font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">Sichere Darstellung </h3>
  <p className="text-sm font-[Outfit-Regular]  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px] max-tab:mt-0">Zum Abschluss wird das Video in unserer Webapp sicher dargestellt. Wir stellen sicher, dass die Anzeige des Videos ebenso sicher ist wie alle vorherigen Schritte. So können Sie sich darauf verlassen, dass Ihre Daten von Anfang bis Ende geschützt sind.</p>
</div>
      </div>
    </div>
    
  );
};

export default NumCircles;
