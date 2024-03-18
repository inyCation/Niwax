import React from 'react'
import NumberCounter from 'number-counter';
import { ComputerImg, CustomerImg, DealImg, StartUpImg, TeamImg, Worker } from '../../assets/MoreDetailsAssets'


const MoreDetails = () => {
  return (
    <div className='moreDetails'>
        <div className="top">
            <div className="yearInBusines">
                <img src={StartUpImg} alt="" />
                <div className="numberWithDesc">
                    <div className="number">15+</div>
                    <div className="desc">Year In Business</div>
                </div>
            </div>

            <div className="teamMembers">
                <img src={TeamImg} alt="" />
                <div className="numberWithDesc">
                    <div className="number">80+</div>
                    <div className="desc"> Team Members </div>
                </div>
            </div>

        </div>
        <div className="bottom">

            <div className="happyClient">
                <img src={ComputerImg} alt="" />
                <div className="numberWithDesc">
                    <div className="number">450+</div>
                    <div className="desc"> Happy Clients </div>
                </div>
            </div>
            <div className="projectDone">
                <img src={DealImg} alt="" />
                <div className="numberWithDesc">
                    <div className="number">48K</div>
                    <div className="desc"> Projects Done </div>
                </div>
            </div>
            <div className="hoursWorked">
                <img src={Worker} alt="" />
                <div className="numberWithDesc">
                    <div className="number">95k</div>
                    <div className="desc"> Hours Worked </div>
                </div>
            </div>
            <div className="supportAvailable">
                <img src={CustomerImg} alt="" />
                <div className="numberWithDesc">
                    <div className="number">27/7</div>
                    <div className="desc"> Support Available </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MoreDetails