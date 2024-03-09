import React,{useRef,useEffect} from 'react'
import {AiOutlineCloseCircle} from "react-icons/ai"

const PopUpWithForm = () => {
  const popup = useRef();

  const handleClose = () => {
    popup.current.style.display = "block";
  };


  useEffect(() =>{
    setTimeout(
      handleClose
    ,2000)
  },[])



  return (
    <>
      <div className="popUpContainer" ref={popup} >
        <div className="popUpWithForm" >
            <div className="form">
                <div className="title">Build Your App in just 2 Weeks</div>
                <div className="desc">Leave your details and one of our experts will contact you soon</div>
                <form action="">
                  <div className="fullName">
                    <input type="text" name="fullname" id="fullname"/>
                    <label htmlFor="fullname">Full Name<sup>*</sup> </label>
                  </div>
                  <div className="emailAddress">
                    <input type="email" name="emailAddress" id="emailAddress"/>
                    <label htmlFor="emailAddress">Email Address<sup>*</sup> </label>
                  </div>
                  <div className="mobileNumber">
                    <input type="tel" name="mobileNumber" id="mobileNumber"/>
                    <label htmlFor="mobileNumber">Mobile Number<sup>*</sup> </label>
                  </div>
                  <button type="submit">
                    Submit
                    <div className="circle"></div>
                  </button>
                  <div className="privacyDesc">
                    We hate spam, and we respect your privacy.
                  </div>
                </form>
            </div>
            <div className="img">

            </div>
            <div className="closeBtn" onClick={handleClose}>
              <AiOutlineCloseCircle />
            </div>
        </div>
      </div>
    </>
  )
}

export default PopUpWithForm