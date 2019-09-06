import React, {Component} from 'react';
import './BookingComponent.css';
import BookingIdComponent from './BookingIdComponent';

const BookingComponent = (props)=>{

    let ticketId= null;

    const  create_UUID=()=>{
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
    }

    const bookTicket = ()=>{
        ticketId = create_UUID();
        console.log('Ticket booked', ticketId);
    }

    return (
        <form className="form-class">
            <h6>Please select time slot for your commute</h6>
             <div className="form-group row"> 
            <div><label className="ml-2">Please enter your name:</label><input className="ml-2" type="text"/></div>            
            <select className="form-control form-control-sm col-sm-2 ml-2">
                <option>Please select slot</option>
                <option>7:00 AM</option>
                <option>8:00 AM</option>
                <option>9:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>12:00 AM</option>
                <option>1:00 PM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
                <option>4:00 PM</option>
                <option>5:00 PM</option>
            </select>
            <button className="btn btn-success btn-sm" onClick={bookTicket}>Book Ticket</button>
        </div>
        <BookingIdComponent bookingId = {create_UUID()}/>

        </form>
       
    )
}
export default BookingComponent;