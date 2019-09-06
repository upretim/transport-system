import React, {Component} from 'react';

const BookingReport = (props)=>{
    return(
        <div>

            <div><label>Total number of Seats: {props.numberOfSeats}</label></div>
            <div><label>Total Booked Seats: {props.bookedSeats}</label></div>
            <div><label>Total Available Seats: {props.availableSeats}</label></div>
            
            
        </div>
    )
}

export default BookingReport;