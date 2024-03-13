import React,{useState,useRef} from 'react'
import LoadingBar from 'react-top-loading-bar'
import { SideSliderContext } from './context/SideSliderContext'
import {Header,PopUpWithForm, WeCreativeAgency} from "./components"
import IntegratedServicesCard from './components/IntegratedServicesCard'

import {carRentalImg} from "./assets/HomeAssets"


import "./style.scss"
import Home from './pages/Home'


const App = () => {
  
  const [progress, setProgress] = useState(0)
  const loadingBar = useRef(null);

  const updateProgress = (newProgress) => {
    setProgress(newProgress);
    loadingBar.current.continuousStart();
  };


  const [sideSliderStatus, setSideSliderStatus] = useState(false)




  return (
    <div onScroll={()=>updateProgress(`20%`)} >
      <LoadingBar
        color='#f11946'
        ref={loadingBar}
      />
      
      <SideSliderContext.Provider value={{sideSliderStatus,setSideSliderStatus}}>
        <Header />
        <PopUpWithForm />
        <Home />
        <WeCreativeAgency />

             
        <div className="integratedServices">
          <div className="cards">
            <IntegratedServicesCard img={carRentalImg} title={"Web Development"} techProp={{"techData":["php",".Net","Java","Joomla"]}} details={"Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."}   />

            <IntegratedServicesCard img={carRentalImg} title={"Web Development"} techProp={{"techData":["php",".Net","Java","Joomla"]}} details={"Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."}   />

            <IntegratedServicesCard img={carRentalImg} title={"Web Development"} techProp={{"techData":["php",".Net","Java","Joomla"]}} details={"Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."}   />

            <IntegratedServicesCard img={carRentalImg} title={"Web Development"} techProp={{"techData":["php",".Net","Java","Joomla"]}} details={"Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."}   />

            <IntegratedServicesCard img={carRentalImg} title={"Web Development"} techProp={{"techData":["php",".Net","Java","Joomla"]}} details={"Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."}   />

            <IntegratedServicesCard img={carRentalImg} title={"Web Development"} techProp={{"techData":["php",".Net","Java","Joomla"]}} details={"Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."}   />


          </div>
          <div className="hire">
            Hire A <span>Dedicated Developer</span> 
            <span className="btn">Hire Now  <div className="circle"></div></span>
          </div>
        </div>


      </SideSliderContext.Provider>
    </div>
  )
}

export default App