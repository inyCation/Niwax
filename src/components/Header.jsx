import React,{useRef,useState} from 'react'
import {FaMoon,FaSun} from "react-icons/fa"
import logo from "../assets/white-logo.png"
import SideSlider from './SideSlider'


const Header = () => {

  const [sideSlider, setSideSlider] = useState(false);
  const requestAQuote = useRef();

  const handleRequestAQuote = () =>{
    setSideSlider(prev => !prev);
  }



  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt={logo} />
        </div>
        <menu>
          <li>Home</li>
          <li>Pages</li>
          <li>Shortcuts</li>
          <li>Portfolio</li>
          <li>Blogs</li>
        </menu>
        <div className="requestAQuote" ref={requestAQuote} onClick={handleRequestAQuote}>
          Request a Quote
          <div className="circle"></div>
        </div>
        <div className="toggler">
          <FaSun />
        </div>
      </nav>
      {
        sideSlider ? ( <SideSlider /> ) : ("")
      }
    </>
  )
}

export default Header