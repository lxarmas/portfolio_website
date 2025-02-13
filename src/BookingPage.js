import React from "react";
import BookingForm from "./BookingForm";

function BookingPage( { availableTimes, dispatch } ) {
    return (
        <section className="booking-page py-12 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    We want to hear from you! Feel free to ask any questions.
                </h1>
                <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
            </div>
        </section>
    );
}

export default BookingPage;
