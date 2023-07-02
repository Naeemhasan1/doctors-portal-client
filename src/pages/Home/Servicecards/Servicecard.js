import React from 'react'

const Servicecard = ({card}) => {
    const{name,description,icon}=card
  return (
    <div class="card bg-base-100 sm:mb-20 shadow-xl">
        <figure class="px-10 pt-10">
            <img src={icon} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">{name}</h2>
            <p class='break-all'>{description}</p>
        </div>
    </div>
  )
}

export default Servicecard;