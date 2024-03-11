import React,{useRef,useContext} from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai'

import { SideSliderContext } from '../context/SideSliderContext';



const SideSlider = () => {

    const sideImageSlider = useRef();
    const {setSideSliderStatus} = useContext(SideSliderContext);

    const handleClose = () => {
        sideImageSlider.current.style.right = "-30vw";
        setSideSliderStatus(false)
    };
    
  return (
    <>
        <div className="sideImageSlider" ref={sideImageSlider}>
            <h3>Request A Quote</h3>
            <form action="">
                <input type="text" name="name" id="name" placeholder='Enter Name' />
                <input type="email" name="email" id="email" placeholder='Enter Email' />
                <input type="tel" name='mobile' id='mobile' placeholder='Enter Mobile' />
                <select name="data" id="data">
                  <option value="" selected={true} >Select Requirement</option>
                  <option value="Web">Web</option>
                  <option value="Graphics" >Graphics</option>
                  <option value="Video">Video</option>
                </select>
                <textarea name="message" id="message" rows={5} placeholder='Enter Your Message'>
                </textarea>

                <button className='submitBtn' type="submit">Submit
                <div className="circle"></div>
                </button>
            </form>

            <div className="closeBtn" onClick={handleClose}>
              <AiOutlineCloseCircle />
            </div>
        </div>
    </>
  )
}

export default SideSlider