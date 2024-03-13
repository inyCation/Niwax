import React,{useRef,useContext} from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai'

import { SideSliderContext } from '../context/SideSliderContext';
import { MailLogo, MapLogo, CallLogo, WhatsappLogo } from '../assets/SideSliderAssets';



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

                <div className="getInTouch">
                  <div className="title">Get In Touch</div>
                  <div className="desc">
                  Please fill out the form below if you have a plan or project in mind that you'd like to share with us.
                  </div>
                  <div className="getMethod">
                    <div className="call">
                      <img src={CallLogo} alt="" srcset="" />
                      <div className="details">
                        <h4>+91-0987654321</h4>
                        <p>Mon-Fri 9am - 6pm</p>
                      </div>
                    </div>
                    <div className="whatsapp">
                      <img src={WhatsappLogo} alt="" srcset="" />
                      <div className="details">
                        <h4>+91-1234567890</h4>
                        <p>Mon-Fri 9am - 6pm</p>
                      </div>
                    </div>
                    <div className="mail">
                      <img src={MailLogo} alt="" srcset="" />
                      <div className="details">
                        <h4>[email protected]</h4>
                        <p>Online Support</p>
                      </div>
                    </div>
                    <div className="map">
                      <img src={MapLogo} alt="" srcset="" />
                      <div className="details">
                        <h4>Jaipur, Rajasthan, India</h4>
                        <p>Visit Our Office</p>
                      </div>
                    </div>
                  </div>
                </div>

            </form>


            <div className="closeBtn" onClick={handleClose}>
              <AiOutlineCloseCircle />
            </div>
        </div>
    </>
  )
}

export default SideSlider