import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Bookingform({ availableTimes, dispatch }) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");
    const [errors, setErrors] = useState({});
    const today = new Date().toISOString().split('T')[0];

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            navigate("/confirmed");
        } else {
            setErrors(formErrors);
        }
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
        dispatch({ type: 'UPDATE', date: e.target.value });
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const navigate = useNavigate();

    const validateForm = () => {
        const errors = {};
        if (!date) errors.date = "Please choose a date.";
        if (!time) errors.time = "Please choose a time.";
        if (guests < 1 || guests > 10) errors.guests = "Number of guests must be between 1 and 10.";
        if (!occasion) errors.occasion = "Please choose an occasion.";
        return errors;
    };

    const handleGuestsChange = (e) => {
        setGuests(parseInt(e.target.value, 10));
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <label htmlFor="date" id="date1">Choose Date</label>
            <input
                type="date"
                id="date"
                value={date}
                onChange={handleDateChange}
                required
                min={today}
                //aria-label="dd/mm/yyyy"
            />
            {errors.date && <span>{errors.date}</span>}

            <label htmlFor="time">Choose Time</label>
            <select
                id="time"
                value={time}
                onChange={handleTimeChange}
                required
                aria-label="Select Time"
            >
                <option value="" disabled>Select a time</option>
                {availableTimes.map((timeOption) => (
                    <option key={timeOption} value={timeOption}>{timeOption}</option>
                ))}
            </select>
            {errors.time && <span>{errors.time}</span>}

            <label htmlFor="guests">Number of People</label>
            <input
                type="number"
                id="guests"
                value={guests}
                placeholder="1"
                min="1" max="10"
                onChange={handleGuestsChange}
                required
            />
            {errors.guests && <span>{errors.guests}</span>}

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
                aria-label="Select Occasion"
            >
                <option value="" disabled>Select an occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="engagement">Engagement</option>
                <option value="others">Others (Please Specify)</option>
            </select>
            {errors.occasion && <span>{errors.occasion}</span>}

            <input type="submit" value="Make your reservation" disabled={Object.keys(errors).length > 0} />
        </form>
    );
}

export default Bookingform;
