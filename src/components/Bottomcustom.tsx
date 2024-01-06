import React from 'react'

const Bottomcustom = () => {
  return (
    <div className='w-full bg-white py-10 px-[80px] max-tab:px-[40px] max-md:px-[30px]'>
    <div className='max-w-[2000px] mx-auto'>
    <h3 className="text-sm font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
    ACT NOW
          </h3>
          <h1 className="text-lg font-[Outfit-Bold]  max-md:text-sm max-md:text-center max-laptop:text-lf max-md:leading-7">
          Ist eine Frage offen geblieben?
          </h1>
          <p className="text-sm font-[Outfit-Regular]  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
          Schreiben Sie uns gerne eine Nachricht!
                </p>
                <div className='button flex gap-8'>
                <button className='text-white bg-primary text-sm max-laptop:text-mf font-bold border-[2px] border-solid border-primary py-[10px] px-[15px] rounded-[10px] mt-6 max-md:text-[14px] whitespace-nowrap max-md:mx-auto'>Frage stellen</button>
                
                </div>
    </div>
        </div>
  )
}

export default Bottomcustom;