import React,{useRef} from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai'


const SideSlider = () => {

    const sideImageSlider = useRef();

    const handleClose = () => {
        sideImageSlider.current.style.right = "-30vw";
      };
    
  return (
    <>
        <div className="sideImageSlider" ref={sideImageSlider}>
            <h3>Request A Quote</h3>
            <form action="">
                <input type="text" name="name" id="name" placeholder='Enter Name' />
                <input type="email" name="email" id="email" placeholder='Enter Email' />
                <input type="tel" name='mobile' id='mobile' placeholder='Enter Mobile' />
                <select value="Select Value" >
                    <option value="">Select Requirement</option>
                    <option value="Web" >Web</option>
                    <option value="Graphics" >Graphic</option>
                    <option value="Video" >Video</option>
                </select>
            </form>

            <div className="closeBtn" onClick={handleClose}>
              <AiOutlineCloseCircle />
            </div>
        </div>
    </>
  )
}

export default SideSlider