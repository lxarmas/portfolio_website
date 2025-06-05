import React from "react";
import BookingForm from "./BookingForm";

function BookingPage( { availableTimes, dispatch } ) {
    return (
        <section className="booking-page py-12 px-6">
            <div className="max-w-7xl mx-auto text-center">

                <h1 className="text-5xl font-extrabold bg-gradient-to-r from-sky-800 to-cyan-600 bg-clip-text text-transparent mb-4 text-center">
                    We want to hear from you! Feel free to ask any questions.
                </h1>
                <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
            </div>
        </section>
    );
}

export default BookingPage;
