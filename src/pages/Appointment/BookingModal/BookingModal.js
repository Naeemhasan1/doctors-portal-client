import React from "react";
import { format } from "date-fns";
const BookingModal = ({ treatment, setTreatment,selectedDate }) => {
  const { name ,slots} = treatment;

  const handleBooking = event => {
      event.preventDefault();

      const form = event.target;
      const date = form.date.value;
      const slot = form.slot.value;
      const pname = form.name.value;
      const email = form.email.value;
      const phone = form.phone.value;

      const booking={
        appointmentDate:date,
        treatment:name,
        patient:pname,
        slot,
        email,
        phone,

      }

      console.log(booking);
      setTreatment(null);

  }

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-4 mt-10">
            <input
              name='date'
              type="text"
              disabled
              value={format(selectedDate, "PP")}
              className="input input-bordered "
            />
            <select name="slot" className="select select-bordered w-full ">
              {
                slots.map((slot,i)=>  <option value={slot} key={i}> {slot} </option>)
              }
            </select>
            <input name='pname' type="text" placeholder="Your Name" className="input input-bordered" />
            <input name="email" type="email" placeholder="Enter Email Address" className="input input-bordered" />
            <input name="phone" type="text" placeholder="Enter phone number" className="input input-bordered" />
            <br />
            <input type="submit" value="Submit" className="btn btn-accent " />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
