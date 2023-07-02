import React from 'react'

const Testimonial = ({SingleTestimonial}) => {
  
  const{name,img,comment,location}=SingleTestimonial
  
  
  return (
    <div class="card bg-base-100 p-4 shadow-xl">

        <p class='break-all'>{comment}</p>
        
        <div class="card-body flex-row">
            
            <div className="avatar">
            <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <img src={img} alt="Shoes"/>
            </div>
            </div>

            <div class='my-auto p-2'>
                <h2 class='font-semibold text-2xl'>{name}</h2>
                <h3>{location}</h3>
            </div>
            
        </div>
    </div>
  )
}

export default Testimonial;