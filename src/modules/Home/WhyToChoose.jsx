import React from 'react'
import { StartUpImg } from "../../assets/MoreDetailsAssets"


const WhyToChoose = () => {
  return (
    <div className='whyToChoose'>
        <div className="left">
            <p className="title">
                Why To Choose Us
            </p>    
            <div className="why">
            Why The Niwax Ranked Top Among The Leading Web & App Development Companies
            </div>
            <div className="whyDesc">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </div>
            <div className="details">
                <div className="card">
                    <img src={StartUpImg} alt="" />
                    <div className="descTitle">
                        <div className="title">Streamlined Project Management</div>
                        <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper. Mauris aliquet egestas metus.</div>
                    </div>
                </div>
                <div className="card">
                    <img src={StartUpImg} alt="" />
                    <div className="descTitle">
                        <div className="title">A Dedicated Team of Experts</div>
                        <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper. Mauris aliquet egestas metus.</div>
                    </div>
                </div>
                <div className="card">
                    <img src={StartUpImg} alt="" />
                    <div className="descTitle">
                        <div className="title">Completion of Project in Given Time</div>
                        <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper. Mauris aliquet egestas metus.</div>
                    </div>
                </div>
            </div>
        </div>   
        <div className="right">
            <div className="img">

            </div>
            <div className="desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </div>
            <div className="nextProjectTogether">
                <div className="title">Let's Start a New Project Together</div>
                <div className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper.
                </div>
                <div className="requestAQuote">
                    Request A Quote
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyToChoose