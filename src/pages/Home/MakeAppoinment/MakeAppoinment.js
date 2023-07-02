import React from 'react'
import doctor from '../../../assets/images/doctor.png'
import appoinment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/Button/PrimaryButton'
const MakeAppoinment = () => {
  return (
        <section class='mt-9' style={{background:`url(${appoinment})`}}>
            <div class=" grid md:grid-cols-2 gap-8">
                <figure>
                    <img src={doctor} class=' sm:px-9 md:-mt-40 hidden lg:block' alt="Album"/>
                </figure>
                <div class="card-body text-white my-auto">
                    <h1 class='text-secondary font-semibold'>Appointement</h1>
                    <h2 class="card-title text-3xl">Make an appointment Today</h2>
                    <p>Click the button to listen on Spotiwhy app Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse vel quas nam eius doloribus quis aperiam officiis ab voluptatibus ea eaque placeat, eos quasi velit expedita? Debitis ipsam eveniet accusantium deleniti consectetur illo impedit unde quaerat repellendus, reprehenderit consequatur sit, numquam blanditiis similique quod minus commodi quibusdam ad labore? Rem! </p>
                    <div class="card-actions justify-start">
                    <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default MakeAppoinment;