import React from 'react'
import { LandingPage, ISCards, WeCreativeAgency,WhyToChoose, MoreDetails } from "../modules/Home"

import "../modules/Home/styles/styles.scss"

const Home = () => {
  return (
    <>
      <LandingPage />
      <ISCards />
      <WeCreativeAgency />
      <MoreDetails />
      <WhyToChoose />
    </>
  )
}

export default Home