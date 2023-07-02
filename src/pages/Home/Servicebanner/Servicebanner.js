import React from 'react'
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../Components/Button/PrimaryButton';

const Servicebanner = () => {
  return (
    
        <div class=" grid   md:grid-cols-2  md:gap-8 content-center md:m-40 bg-base-100 ">
            <figure class='m-12'><img src={treatment} class='rounded-lg sm:px-16' alt="Album"/>
            </figure>
            <div class="card-body lg:my-auto">
                <h2 class="card-title text-3xl">Exceptional Dental Care, on Your Terms</h2>
             <p>Click the button to listen on Spotiwhy app Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse vel quas nam eius doloribus quis aperiam officiis ab voluptatibus ea eaque placeat, eos quasi velit expedita? Debitis ipsam eveniet accusantium deleniti consectetur illo impedit unde quaerat repellendus, reprehenderit consequatur sit, numquam blanditiis similique quod minus commodi quibusdam ad labore? Rem! </p>
                <div class="card-actions justify-start">
                    <PrimaryButton>Service</PrimaryButton>
                </div>
            </div>
        </div>

  )
}

export default Servicebanner;