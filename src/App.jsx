import React,{useState} from 'react'
import { SideSliderContext } from './context/SideSliderContext'
import {Header,PopUpWithForm} from "./modules/Home"



import "./style.scss"
import Home from './pages/Home'


const App = () => {

  const [sideSliderStatus, setSideSliderStatus] = useState(false)

  return (
    <>
      <SideSliderContext.Provider value={{sideSliderStatus,setSideSliderStatus}}>
        <Header />
        <PopUpWithForm />

        <Home />
       
      </SideSliderContext.Provider>
    </>
  )
}

export default App