import { format } from 'date-fns';
import React, { useEffect, useState } from 'react'
import AppointmentOptions from './AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({selectedDate}) => {

    const [appointmentOptions ,setAppointmentOptions] = useState([]);
    const [treatment,setTreatment]= useState(null);
    useEffect(()=>{

        fetch('appointmentOptions.json')
        .then(res =>res.json())
        .then(data=>setAppointmentOptions(data))

    },[])

  return (
    <section>
        
        <p className='text-center text-secondary font-bold my-auto'>Available Services on {format(selectedDate,'PP')}</p>
        
        <div className='mt-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                appointmentOptions.map(options=><AppointmentOptions
                    key={options._id}
                    appointOption={options}
                    setTreatment={setTreatment}
                ></AppointmentOptions>)
            }
        </div>
        {
            treatment &&
            <BookingModal
            selectedDate={selectedDate}
            treatment ={treatment}
            setTreatment={setTreatment}
        ></BookingModal>
        }
    </section>
  )
}

export default AvailableAppointment;