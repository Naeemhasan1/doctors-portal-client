import React from 'react'
import Banner from '../Banner/Banner'
import Infocards from '../Infocards/Infocards'
import Servicecards from '../Servicecards/Servicecards'
import Servicebanner from '../Servicebanner/Servicebanner'
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment'
import Testimonials from '../Testimonials/Testimonials'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <div className='mx-5'>
      <Banner></Banner>
      <Infocards></Infocards>
      <Servicecards></Servicecards>
      <Servicebanner></Servicebanner>
      <MakeAppoinment></MakeAppoinment>
      <Testimonials></Testimonials>
      <Contact></Contact>

    </div>
  )
}

export default Home;