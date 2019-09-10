import React, {Component} from 'react';
import Loader from 'react-loader-spinner';
import axios from 'axios';
import BookingComponent from './../../components/BookingComponent/bookingComponent';
import BookingReport from './../../components/BookingReport/BookingReport';


class userLayout extends Component {

    constructor(props){
        super(props)
        this.state = {
            available:0,
            filled: 0,
            total: 0
        }
}
componentDidMount(){
    axios.get('http://localhost:3001/seat-data')
    .then((response => {
        console.log(response.data.seatDetails[0])
        this.setState({
            available:response.data.seatDetails[0].available,
            filled: response.data.seatDetails[0].filled,
            total: response.data.seatDetails[0].total,
            ticketId: null
        })
    }))
    .catch(error=>{
        console.log(error.message)
        this.setState({
            error: error
        })
    })
}
  
create_UUID=()=>{
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}
bookTicketHander = (data, event)=>{
    event.preventDefault();
    console.log('booking data', data)
    this.ticketId = this.create_UUID();
    const ticket = {
        _id : this.ticketId,
        pessangerName : data.name,
        timeSlot : data.selectedSlot
    }
    axios.post('http://localhost:3001/ticket-data', ticket)
    .then((response)=>{
        this.setState({
            ticketId: this.ticketId
        })
    })
    .catch(error=>{
        this.setState({
            ticketId: "Error"
        })
        console.log('Error while saving ticket', error.response.data);
    })
    
}
    render(){
        const {  available, filled, total, ticketId} = this.state;
        let view= (<BookingReport 
            numberOfSeats={total}
            bookedSeats={filled}
            availableSeats={available}
           />)
    
           if (total==0){
               view = <Loader type="Bars"  
               color="#00BFFF"
               height="100"
               width="100" />
    
           }
        return (
            <>
            <BookingComponent bookTicket={this.bookTicketHander}  bookingId= {ticketId}/>
            {view}
            </>
        )
    }
}

export default userLayout;

