import React from 'react';

const BookingId = (props)=>{
  let view = null;
  if (props.bookingId=='Error'){
    view = <div className="alert alert-warning alert-dismissible">
    <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
    <strong>Error!</strong> An Error occured while booking your Ticket, please try after some time.
</div>
  }
  else if(props.bookingId){
    view = <div className="alert alert-success alert-dismissible">
    <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
    <strong>Success!</strong> your seat is confirmed!!! Please note your booking id is {props.bookingId}.
</div>

  }
    return(
           view
    )
}

export default BookingId;