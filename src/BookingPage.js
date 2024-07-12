import React from "react";
import Bookingform from "./BookingForm";

function BookingPage({availableTimes, dispatch}){
    return(
        <>
            <h1 id="book">Book a Table</h1>
            <Bookingform availableTimes={availableTimes} dispatch={dispatch} />
        </>
    )
}

export default BookingPage;