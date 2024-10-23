import React from 'react'
import AboutKrishStationary from './Components/About_Krish/AboutKrishStationary.jsx'
import DoubleCom from './Components/DoubleCom/DoubleCom.jsx'
import Features from './Components/Features/Features'
import Footer from './Components/Footer/Footer.jsx'
import Founder from './Components/Founder/Founder.jsx'
import Gallery from './Components/Gallery/Gallery.jsx'
import HeadDiv from './Components/HeadDiv/HeadDiv'
import Header from './Components/Header/Header'
import Krish from './Components/Krish/Krish'
import KrishElectrical from './Components/KrishElectricals/KrishElectricals.jsx'
import OurProducts from './Components/OurProducts/OurProducts'
import PremiumDis from './Components/PremiumDis/PremiumDis'
import ServicesK from './Components/ServicesK/ServicesK.jsx'
import VisitUs from './Components/VisitUs/VisitUs'
import Contactus from './Components/Contactus/Contactus'

const App = () => {
  return (
    <div> 
        <Header/>
        <HeadDiv/>
        <Features/>
        <DoubleCom/>
        <Krish/>
        <OurProducts/> 
        <PremiumDis/>
        <Founder/>
        <AboutKrishStationary/>
        <ServicesK/> 
        <KrishElectrical/>
        <Gallery/>
        <VisitUs/>
        <Contactus/>
        <Footer/> 
    </div>
  )
}
export default App