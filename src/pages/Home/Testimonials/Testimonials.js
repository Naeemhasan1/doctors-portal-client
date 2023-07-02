import React from 'react'
import qoute from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Testimonial from './Testimonial'
const Testimonials = () => {

    const testimonialData=[
        {
            id:1,
            name:'Winson herry',
            img:people1,
            location:'california',
            comment:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id:2,
            name:'jorina',
            img:people2,
            location:'tikatoli',
            comment:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id:3,
            name:'zaman',
            img:people3,
            location:'moylapotti',
            comment:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
    ]

  return (
    <section class='my-16'>

        <div class='flex justify-between m-6'>
            <div>
                <h1 class='text-secondary font-bold'>Testimonial</h1>
                <h2 class='text-2xl font-normal'>What Our Patients Says</h2>
            </div>

            <div>
                <img src={qoute} class='w-20 lg:w-48' alt="" />
            </div>
        </div>

        <div class='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {testimonialData.map(SingleTestimonial=><Testimonial
                    key={testimonialData.id}
                    SingleTestimonial={SingleTestimonial}
            
            ></Testimonial>)
            
            }

        </div>

    </section>
  )
}

export default Testimonials;