import React from 'react'


const AppointmentOptions = ({appointOption,setTreatment}) => {
    
  const{name,slots}=appointOption;
  return (
    <div className="card shadow-xl">
        <div className="card-body text-center ">
             
                <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p>{slots.length}{slots.length > 1 ? 'spaces' : 'spaces'}</p>
                <div className='card-actions justify-center'>
                <label
                 disabled={slots.length===0}
                 htmlFor="booking-modal" 
                 className='btn btn-primary text-white'
                 onClick={()=>setTreatment(appointOption)}
                 >Book Appointment</label>
                </div>
        </div>
    </div>
  )
}

export default AppointmentOptions;