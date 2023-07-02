import React from 'react'
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import PrimaryButton from '../../../Components/Button/PrimaryButton'
const Banner = () => {
  return (
    <section style={{background:`url(${bg})`}} >
      <div class="hero  " >
      <div class=" hero-content flex-col lg:flex-row-reverse">
        
          <img src={chair} class=" rounded-lg lg:w-1/2 lg:my-60" alt='banner img' />  
        
          <div>
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
      </div>
      </div>
    </section>
  )
}

export default Banner;