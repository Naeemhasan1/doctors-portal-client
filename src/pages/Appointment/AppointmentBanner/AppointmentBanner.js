import React from 'react'
//import bg from '../../../assets/images/bg.png'
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({selectedDate,setSelectedDate}) => {

  

  return (
    
      
      <div class=" hero-content flex-col lg:flex-row-reverse justify-evenly">
        
          <img src={chair} class=" rounded-lg lg:w-1/2 lg:my-40" alt='banner img' />  
        
          <div class='mr-12 text-center'>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
            
          </div>
      </div>
    
    
  )
}

export default AppointmentBanner