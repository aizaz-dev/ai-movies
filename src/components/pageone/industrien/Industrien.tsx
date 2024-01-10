import { useTranslation } from "react-i18next";
import { FaArrowRightLong } from "react-icons/fa6";

const Industrien = () => {
  const { t } = useTranslation();
  const industriesData = [
    {
      id: 1,
      title: 'Maschinenbau',
      imageSrc: 'pageone/industrien/1.png',
      description: 'Im Maschinenbau Segment werden unsere E-Learnings verwendet, um Werksmitarbeiter über neue interne Software Anwendungen zu schulen, sowie die gesamte Belegschaft über neue Produktentwicklungen zu informieren.',
    },
    {
      id: 2,
      title: 'Öffentliche Verwaltung',
      imageSrc: 'pageone/industrien/2.png',
      description: 'Landkreise und Städte können mit Hilfe unserer E-Learnings bei der herausfordernden Digitalisierung Mitarbeiter und Beamte über neue Prozesse effektiv und nachhaltig informieren.',
    },
    {
      id: 3,
      title: 'Finance & Insurance',
      imageSrc: 'pageone/industrien/3.png',
      description: 'Sensible Compliance Richtlinien können dank effizienter E-Learnings sicher und nachhaltig an Mitarbeiter vermittelt werden. Zudem lassen sich komplexe Finanzprodukte und Versicherungsprozesse in einem einfachen Kontext darstellen.',
    },
    {
      id: 4,
      title: 'Unternehmensberatungen',
      imageSrc: 'pageone/industrien/4.png',
      description: 'Dank interaktiver E-Learnings können Unternehmensberatungen die Prozesse der Mandanten effizient dokumentieren und somit die Zusammenarbeit ausweiten.',
    },
  ];

  return (
    <div className='w-full bg-light100 py-10 px-[80px] max-tab:px-[40px] max-md:px-[30px]'>
      <div className='max-w-[2000px] m-auto'>
        <h1 className='text-sm  font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf'>{t("Industrien.INDUSTRIEN_TITLE")}</h1>
        <div className="flexitems mt-8   grid grid-cols-4 max-md:grid-cols-1 max-tab:grid-cols-2 gap-[50px] items-start max-tab:mt-[20px] max-md:flex-col max-md:gap-[40px]">
          {industriesData.map((industry, index) => (
            <div key={industry.id} className="item w-[100%] max-md:w-full max-md:items-center flex flex-col gap-[30px]">
              <img className='w-[50%] max-md:w-[80%]' src={industry.imageSrc} alt={industry.title} />
              <div className='flex flex-col gap-2'>
                <h1 className='text-sm  font-[Outfit-Bold] max-md:text-left max-laptop:text-mf'>{industry.title}</h1>
                <p className='text-sm font-[Outfit-Regular] max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start'>{industry.description}</p>
                {index < 2 && (
                  <button className="text-sm text-primary  font-[Outfit-Bold] max-md:text-left max-laptop:text-mf mt-[30px] whitespace-nowrap flex items-center justify-start gap-2 py-[15px] rounded-[10px] max-md:text-[14px] ">Case Study Ansehen  <FaArrowRightLong /></button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Industrien;
