import React from 'react'
import IntegratedServicesCard from '../../components/IntegratedServicesCard'
import {carRentalImg} from "../../assets/HomeAssets"


const ISCards = () => {
    return (
        <div>
            <div className="integratedServices">
                <div className="cards">
                    <IntegratedServicesCard img={carRentalImg} title={"Web Development"} techProp={{ "techData": ["php", ".Net", "Java", "Joomla"] }} details={"Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."} />

                    <IntegratedServicesCard img={carRentalImg} title={"Web Development"} techProp={{ "techData": ["php", ".Net", "Java", "Joomla"] }} details={"Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."} />

                    <IntegratedServicesCard img={carRentalImg} title={"Web Development"} techProp={{ "techData": ["php", ".Net", "Java", "Joomla"] }} details={"Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."} />

                    <IntegratedServicesCard img={carRentalImg} title={"Web Development"} techProp={{ "techData": ["php", ".Net", "Java", "Joomla"] }} details={"Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."} />

                    <IntegratedServicesCard img={carRentalImg} title={"Web Development"} techProp={{ "techData": ["php", ".Net", "Java", "Joomla"] }} details={"Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."} />

                    <IntegratedServicesCard img={carRentalImg} title={"Web Development"} techProp={{ "techData": ["php", ".Net", "Java", "Joomla"] }} details={"Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."} />


                </div>
                <div className="hire">
                    Hire A <span>Dedicated Developer</span>
                    <span className="btn">Hire Now</span>
                </div>
            </div>
        </div>
    )
}

export default ISCards