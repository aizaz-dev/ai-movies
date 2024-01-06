import React from 'react'
import Header from '../../components/header/Header'
import Flexvid from '../../components/pagetwo/flexvid/Flexvid'
import Webapp from '../../components/pagetwo/webapp/Webapp'
import Features from '../../components/pagetwo/features/Features'
import Flexbenifit from '../../components/pagetwo/flexbenifit/Flexbenifit'
import Numcircles from '../../components/pagetwo/numcircles/Numcircles'
import Actnow from '../../components/pagetwo/actnow/Actnow'
import Footer from '../../components/footer/Footer'

const Pagetwo = () => {
  return (
    <div className='w-full'>
        
        <Flexvid/>
        <Webapp/>
        <Features/>
        <Flexbenifit/>
        <Numcircles/>
        <Actnow/>
       
    </div>
  )
}

export default Pagetwo