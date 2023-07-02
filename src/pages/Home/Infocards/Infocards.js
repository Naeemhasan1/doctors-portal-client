import React from 'react'
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import Infocard from './Infocard'

const Infocards= () => {

    const cardData = [
        {
            id:1,
            name:'Opening hours',
            description:'Open 9am to 5am everyday',
            icon:clock,
            bgClass:'bg-gradient-to-r from-secondary to-primary',
        },
        {
            id:2,
            name:'visit our location',
            description:'Brooklyn,NY 10036, United States',
            icon:marker,
            bgClass:'bg-neutral',
        },
        {
            id:3,
            name:'contact us now',
            description:'+00456789',
            icon:phone,
            bgClass:'bg-gradient-to-r from-secondary to-primary',
        }
    ]


  return (
    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
            cardData.map(card=><Infocard
                key={card.id}
                card={card}
            ></Infocard>

            )
        }
    </div>
  )
}

export default Infocards;