import React, {Component} from 'react';
import './BookingComponent.css';
import BookingIdComponent from './BookingIdComponent';

class  BookingComponent extends Component {
    constructor(props){
      super(props)
    }
     
    ticketDetails = {
        name: "",
        selectedSlot: ""
    }
  
   
    nameEntered = (event)=>{
        event.preventDefault();
        this.ticketDetails['name'] = event.target.value;
        console.log('handle selected ', event.target.value)
    }

    slotSelected = (event)=>{
        event.preventDefault();
        console.log('handle selected ', event.target.value);
        this.ticketDetails['selectedSlot'] = event.target.value;
        console.log('Selected ticket ', this.ticketDetails);
    }

    enableBooking = ()=>{
        if(this.ticketDetails['selectedSlot']=="" || this.ticketDetails['name']==""){
            console.log('this is enableBooking', true);
            return false;  
        }    
        else{
            console.log('this is enableBooking', false);
        return false;
        }     
    }

    render(){
       let view = null;
        if(this.props.bookingId){
            view = <BookingIdComponent bookingId = {this.props.bookingId}/>
        }
        return (
            <form className="form-class">
                <h6>Please select time slot for your commute</h6>
                 <div className="form-group row"> 
                <div><label className="ml-2">Please enter your name:</label>
                <input className="ml-2" type="text" onChange={this.nameEntered}/>
                </div>            
                <select className="form-control form-control-sm col-sm-2 ml-2" onClick={this.slotSelected} >
                    <option>Please select slot</option>
                    <option value="7:00 AM">7:00 AM</option>
                    <option value="8:00 AM">8:00 AM</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 AM">12:00 AM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                </select>
                <button className="btn btn-success btn-sm" onClick={this.props.bookTicket.bind(this, this.ticketDetails)}  disabled= {this.enableBooking()}>Book Ticket</button>
            </div>
              {view}
            </form>  
        )
    }
}

export default BookingComponent;