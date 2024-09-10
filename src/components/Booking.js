// import React  from "react";


// import BookingForm from "./BookingForm";

// const  Booking = (props) => {
//   return (
//   <BookingForm availableTimes ={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm} />
//   );
// }

// export default Booking;



import React from "react";
import BookingForm from "./BookingForm";
import { useState } from "react";

const Booking = (props) => {



    return (

        <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
    )
}

export default Booking;