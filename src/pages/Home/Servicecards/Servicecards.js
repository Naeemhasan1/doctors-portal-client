import React from 'react'
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Servicecard from './Servicecard'

const Servicecards = () => {
  
  const serviceCardData=[
    {
        id:1,
        name:'Fluoride Treatment',
        description:'loremipsumjmcmfdsjfsdfjiefmdmdn',
        icon:fluoride,
    },
    {
        id:2,
        name:'Cavity Filling',
        description:'loremipsumjmcmfdsjfsdfjiefmdmdnjkjndjijfdfifjwhat happen if it is too long than aother',
        icon:cavity,
    },
    {
        id:3,
        name:'Teeth Whitening',
        description:'loremipsumjmcmfdsjfsdfjiefmdmdn ',
        icon:whitening,
    },
  ]
  
  
  
    return (
    <div>
        <div class='mt-32 mb-16	'>
            <h1 class='text-center text-secondary font-bold'>Our services</h1>
            <h2 class='text-center text-3xl'>Service we provided</h2>
        </div>

        <div class='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                serviceCardData.map(card =><Servicecard
                    key={card.id}
                    card={card}
                ></Servicecard>

                )
            }
        </div>
    </div>


  )
}

export default Servicecards;