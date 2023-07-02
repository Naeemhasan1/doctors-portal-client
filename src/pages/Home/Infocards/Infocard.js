import React from 'react'

const Infocard = ({card}) => {
  
    const {name,description,icon,bgClass}=card;

    return (
  <div class={`card p-2 text-white md:card-side  shadow-xl ${bgClass}`}>
    <figure>
      <img src={icon} alt="Movie"/>
    </figure>
    <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <p>{description}</p>
    
  </div>
</div>
  )
}

export default Infocard;