
"use client"
import Navbar from './components/customComponents/figma/Navbar'
import Hero from './components/customComponents/figma/hero'
import { TeamGrid } from './components/customComponents/figma/TakingJazbaaToNextLevel'
import { TransformationStories } from './components/customComponents/figma/TransformationStories'
import ProcessFlow from './components/customComponents/figma/ProcessFlow'
// import JazbaaStats from './components/customComponents/figma/JazbaaStats'
import AboutLinuxWorld from './components/customComponents/figma/AboutLinuxWorld'
import InvestorsSection from './components/customComponents/figma/InvesterSection'
import EnhancedMasonryGallery from './components/customComponents/figma/MasonaryGallary'
import Footer from './components/customComponents/figma/Footer'
import Footer2 from './components/customComponents/figma/Footer2'
import StartupCarousel from './components/customComponents/figma/StartupCarousel'
// import StatisticsSection from './components/customComponents/figma/JazbaaStats'
import DeviceCards from './components/customComponents/figma/devicecards'
import AboutShop from './components/customComponents/figma/AboutShop'


export default function Home() {
  return (
   <>

  <Navbar />
  <Hero />
  <TeamGrid />
  <DeviceCards />
  <AboutShop/>
  
  
  {/* <StatisticsSection />
  <StartupCarousel/>
  <EnhancedMasonryGallery />
  <TeamGrid />
<InvestorsSection />
  <TransformationStories />
  <ProcessFlow/>
  <AboutLinuxWorld ></AboutLinuxWorld>
   */}
  {/* <JazbaaStats />
    */}
  
  
  
  <Footer2 />
  {/* <Footer /> */}
   </>
  )
}
