import React from 'react'
import PrimaryButton from '../../../Components/Button/PrimaryButton'
import appoinment from '../../../assets/images/appointment.png'
const Contact = () => {
  return (
    <div className="hero" style={{background:`url(${appoinment})`}}>
        <div className="hero-content">
            <div className="card flex-shrink-0 w-full max-w-sm">
                <div className="card-body ">
                    <h1 className='text-secondary font-semibold text-center '>Contact Us</h1>
                    <h2 className='text-2xl text-white mb-4'>Stay connected with us</h2>
                    <div className="form-control">
                    
                    <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="password" className="input input-bordered" />
                    </div>
                    <div className='form-control'>
                        <textarea className=" textarea textarea-bordered" placeholder="message"></textarea>
                    </div>
                    <div className="text-center mt-6">
                        <PrimaryButton>Submit</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact