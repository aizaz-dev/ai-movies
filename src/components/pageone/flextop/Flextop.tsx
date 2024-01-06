import React from 'react'

const Flextop = () => {
  return (
    <div>
        <div className="w-full m-auto">
      <div className=" bg-[url('/bg.png')] bg-cover w-[100%] lg:flex-row flex flex-col items-center justify-center py-[80px] max-md:py-[30px] px-[80px] max-tab:px-[40px] max-laptop:px-[80px] max-md:px-[30px] gap-[4%] ">
        <div className="max-w-[2000px] w-full mx-auto flex gap-[60px] justify-between   items-center px-[40px]  max-lg:p-[40px] max-md:p-[0px]">
          <div className="w-full  text-white flex flex-col gap-6 ">
            <h3 className='text-sm font-[Outfit-Bold] max-laptop:text-mf max-md:text-center'>Von Input Text zu E-Learning Video</h3>
            <h1 className=" font-[Outfit-Bold] text-left text-lg font-black leading-[60px] max-laptop:text-lf max-md:text-sm max-md:leading-8 max-md:text-center max-laptop:font-[700] max-laptop:leading-10">
            Die effizienteste Art Unternehmens-Wissen zu erstellen
            </h1>
            <p className=" font-[Outfit-Regular] text-left text-sm  max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
            FAST AI Movies ist die einzige KI-Lösung für automatisiert erstellte individuelle E-Learnings - von Kollegen für Kollegen. Sie brauchen keine komplexen Skripte, sondern Ihre Mitarbeiter können vorhandene Dokumentationen / Beschreibungen dort in Minuten in interaktive E-Learnings verwandeln. Lernpsychologische Erkenntnisse sorgen für hohe Verständlichkeit.


            </p>
            <div className='btn flex gap-[20px] max-md:flex-col'>
                <button className='font-[Outfit-Bold] text-primary text-sm font-bold bg-white px-4 py-3 rounded-[12px] whitespace-nowrap max-laptop:text-mf'>Demovideo kostenlos erstellen</button>
                <button className='font-[Outfit-Bold] text-white text-sm bg-transperent px-4 py-3 border border-white rounded-[12px] whitespace-nowrap max-laptop:text-mf'>Wie funktioniert's?</button>
            </div>
          </div>
          <div className=" w-full lg:flex hidden">
            <video autoPlay muted className=" object-cover m-auto controls autoPlay muted">
              <source
                className="w-full h-full object-cover"
                src="./flexvid/vid.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Flextop