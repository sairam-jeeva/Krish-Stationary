import React from 'react'
import DoubleCom from './Components/DoubleCom/DoubleCom.jsx'
import Features from './Components/Features/Features'
import Footer from './Components/Footer/Footer.jsx'
import Founder from './Components/Founder/Founder.jsx'
import HeadDiv from './Components/HeadDiv/HeadDiv'
import Header from './Components/Header/Header'
import Krish from './Components/Krish/Krish'
import OurProducts from './Components/OurProducts/OurProducts'
import PremiumDis from './Components/PremiumDis/PremiumDis'
import VisitUs from './Components/VisitUs/VisitUs'

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
        <VisitUs/>
        <Footer/> 
    </div>
  )
}
export default App