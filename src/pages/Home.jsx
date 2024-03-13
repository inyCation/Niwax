import React from 'react'
import { HomeCards } from '../components'
import {carRentalImg,ewalletImg,marketingImg,seoImg,startUpImg} from "../assets/HomeAssets"
import {FaPlay} from "react-icons/fa"
import imgBottom from "../assets/awards-logo.png"


const Home = () => {
  return (
    <>
        <div className="landingPage">
          <div className="leftDetails">
            <div className="menu">
              <p>WEB.</p>
              <p>MOBILE.</p>
              <p>GRAPHICS.</p>
              <p>MARKETING.</p>
            </div>
            <div className="desc">
              Website and App development solution for transforming and innovating businesses.  
            </div>
            <div className="viewCaseStudyBtn">
              View Case Study
            </div>
            <div className="leftBottomImg">
              <img src={imgBottom} alt="" />
            </div>
          </div>

          <div className="rightDetails">
            <div className="desc">
              <div className="playBtn">
                <FaPlay />
                <div className="effect"></div>
              </div>
              <div className="descDetails">
                <p>We Design Digital Solutions</p>
                <p>For Brands And Companies</p>
              </div>
            </div>
            <div className="cards">
              <HomeCards image={carRentalImg}  title={"Rent Car"} color={"cyan"} />
              <HomeCards image={ewalletImg}  title={"Rent Car"} color={"red"} />
              <HomeCards image={marketingImg}  title={"Rent Car"} color={"green"} />
              <HomeCards image={seoImg}  title={"Rent Car"} color={"magenta"} />
              <HomeCards image={startUpImg}  title={"Rent Car"} color={"blue"} />

             
            </div>

          </div>

        </div>
   



        </>
  )
}

export default Home