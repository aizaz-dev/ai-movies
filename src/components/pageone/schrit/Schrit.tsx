import React from 'react';
import { FaCheck } from "react-icons/fa";


const Schrit = () => {
  return (
    <div className='w-full mt-[50px] px-[80px] max-laptop:px-[60px] max-md:px-[30px] '>
<div className='webapp max-w-[2000px] m-auto  px-[60px] max-md:px-0'>
    <div className='greyblock mt-[20px] w-full bg-light100 flex max-tab:flex-col max-tab:items-center max-md:py-6 gap-[20px] py-[40px] max-md:p-0 rounded-[10px]'>
        <div className="left w-[40%] max-tab:w-full flex justify-start items-start gap-2">
            <div className="iconbox flex flex-col justify-start items-center w-[80px] gap-2 -ml-[38px]  max-md:ml-2">
                <div className="ico w-[79px] h-[79px] max-laptop:w-[60px] max-laptop:h-[60px] rounded-[50%] bg-primary text-white flex items-center justify-center text-lg p-4 font-bold"><FaCheck /></div>
                <div className="line w-[2px] h-[74px] max-md:h-[85px] max-laptop:h-[60px] bg-primary"></div>
                <div className="ico w-[79px] h-[79px] max-laptop:w-[60px] max-laptop:h-[60px] rounded-[50%] bg-light200 text-white flex items-center justify-center text-lg p-4 font-bold"><FaCheck /></div>
                <div className="line w-[2px] h-[46px] max-laptop:h-[30px] bg-light200"></div>
                <div className="ico w-[79px] h-[79px] max-laptop:w-[60px] max-laptop:h-[60px] rounded-[50%] bg-light200 text-white flex items-center justify-center text-lg p-4 font-bold"><FaCheck /></div>
                <div className="line w-[2px] h-[46px] max-laptop:h-[30px] bg-light200"></div>
                <div className="ico w-[79px] h-[79px] max-laptop:w-[60px] max-laptop:h-[60px] rounded-[50%] bg-light200 text-white flex items-center justify-center text-lg p-4 font-bold"><FaCheck /></div>
                <div className="line w-[2px] h-[46px] max-laptop:h-[30px] bg-light200"></div>
                <div className="ico w-[79px] h-[79px] max-laptop:w-[60px] max-laptop:h-[60px] rounded-[50%] bg-light200 text-white flex items-center justify-center text-lg p-4 font-bold"><FaCheck /></div>
            </div>
<div className="desc  p-4 pt-0 flex items-start justify-start flex-col gap-14 max-md:gap-10 max-laptop:gap-[50px]">
    <div className="first">
        <h3 className='text-sm font-[Outfit-Bold] text-primary max-md:text-mf max-laptop:text-mf'>SCHRITT 1</h3>
        <h4 className='text-sm font-[Outfit-Bold] max-md:text-mf max-laptop:text-mf max-laptop:leading-[25px]'>Corporate Design konfigurieren</h4>
        <p className='text-sm font-[Outfit-Regular] max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5'>Wählen Sie ihre Farben und Schriftarten <br className='max-md:hidden'/> aus und laden Sie Ihr Logo hoch.</p>
    </div>
    <div className="first">
        <h3 className='text-sm font-[Outfit-Bold] text-light200 max-md:text-mf max-laptop:text-mf'>SCHRITT 2</h3>
        <h4 className='text-sm font-[Outfit-Bold] text-light300 max-md:text-mf max-laptop:text-mf max-laptop:leading-[25px]'>Text hochladen</h4>
    </div>
    <div className="first">
        <h3 className='text-sm font-[Outfit-Bold] text-light200 max-md:text-mf max-laptop:text-mf'>SCHRITT 3</h3>
        <h4 className='text-sm font-[Outfit-Bold] text-light300 max-md:text-mf max-laptop:text-mf max-laptop:leading-[25px]'>Weitere Einstellungen konfigurieren</h4>
    </div>
    <div className="first">
        <h3 className='text-sm font-[Outfit-Bold] text-light200 max-md:text-mf max-laptop:text-mf'>SCHRITT 4</h3>
        <h4 className='text-sm font-[Outfit-Bold] text-light300 max-md:text-mf max-laptop:text-mf max-laptop:leading-[25px]'>Video generieren</h4>
    </div>
    <div className="first">
        <h3 className='text-sm font-[Outfit-Bold] text-light200 max-md:text-mf max-laptop:text-mf'>SCHRITT 5</h3>
        <h4 className='text-sm font-[Outfit-Bold] text-light300 max-md:text-mf max-laptop:text-mf max-laptop:leading-[25px]'>Video up-to-date halten</h4>
    </div>
</div>
        </div>
        <div className="right w-[55%] h-full flex flex-col items-end max-md:items-center">
            <div className="vid max-tab:hidden">
                <video className='w-[100%] h-[600px] max-laptop:h-[400px] object-cover rounded-[10px]' src="./flexvid/vid.mp4" muted autoPlay loop></video>
            </div>
            <div className='button '>
            <button className='text-primary text-sm font-[Outfit-Bold] max-laptop:text-mf font-bold border-[2px] border-solid border-primary py-[10px] px-[15px] rounded-[10px] mt-6 max-md:text-[14px] whitespace-nowrap max-md:mx-auto'>Demovideo kostenlos erstellen</button>
            </div>
        </div>
     
    </div>
</div>
    </div>
  )
}

export default Schrit