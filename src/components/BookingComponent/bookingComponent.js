import React, {Component} from 'react';
import './BookingComponent.css';
import BookingIdComponent from './BookingIdComponent';

class  BookingComponent extends Component {
    constructor(props){
      super(props)
      this.state = {
          name: "",
          selectedSlot: ""
      }
      this.slotSelected.bind(this);
    }
     
   
    nameEntered = (event)=>{
        event.preventDefault();
        this.setState({
            name:  event.target.value
        })
    }

    slotSelected = (event)=>{
        event.preventDefault();
        this.setState({
            selectedSlot: event.target.value
        });
    }

    render(){

        const ticketDetails = {...this.state}

       const disableBooking = ()=>{
            if(this.state.name== "" || this.state.selectedSlot== ""){
                return true;  
            }    
            else{
                console.log('this is enableBooking', false);
                return false;
            }     
        }
       let view = null;
        if(this.props.bookingId){
            view = <BookingIdComponent bookingId = {this.props.bookingId}/>
        }
        return (
            <form className="form-class">
                <h6>Please select time slot for your commute</h6>
                 <div className="form-group row"> 
                <div><label className="ml-2">Please enter your name:</label>
                <input className="ml-2" type="text"
                 onChange={this.nameEntered}
                  value={this.state.name}
                  placeholder="Name"/>
                </div>            
                <select className="form-control form-control-sm col-sm-2 ml-2" onChange={this.slotSelected} value={this.state.selectedSlot}>
                    <option value="">Please select slot</option>
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
                <button className="btn btn-success btn-sm" onClick={this.props.bookTicket.bind(this, ticketDetails)}  disabled= {disableBooking()}>Book Ticket</button>
            </div>
              {view}
            </form>  
        )
    }
}

export default BookingComponent;