import React from 'react';

const BookingId = (props)=>{
    //console.log('this is your booking id ' ,props.BookingId);
  let view = null;
  if (props.bookingId){
      view =         <div className="alert alert-success alert-dismissible">
      <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
      <strong>Success!</strong> your seat is confirmed!!! Please note your booking id is {props.bookingId}.
  </div>
  }
    return(
           view
    )
}

export default BookingId;