import React, {Component} from 'react';
import axios from 'axios';
import BookingReport from './../../components/BookingReport/BookingReport';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import PessangerDetails from './../../components/PessagerList/PessangerList';

// Spinner doc https://www.npmjs.com/package/react-loader-spinner

class adminLayout extends Component {
    constructor(props){
            super(props)
            this.state = {
                available:0,
                filled: 0,
                total: 0,
                ticketDetails: []
            }
    }
    componentDidMount(){
        axios.get('http://localhost:3001/seat-data')
        .then((response => {
            console.log(response.data.seatDetails[0])
            this.setState({
                available:response.data.seatDetails[0].available,
                filled: response.data.seatDetails[0].filled,
                total: response.data.seatDetails[0].total
            })
        }))
        .catch(error=>{
            console.log(error.message)
            this.setState({
                error: error
            })
        })

        axios.get('http://localhost:3001/ticket-data')
        .then((response => {
            console.log(response.data.ticketData);
            this.setState({
                ticketDetails: response.data.ticketData
            })
        }))
        .catch(error=>{
            console.log(error.message);
        })

    }
  render(){
    const {  available, filled, total} = this.state;
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
      return(
            <>
            {view}
            <PessangerDetails ticketDetails = {this.state.ticketDetails}/>
            </>
      )
  }
}

export default adminLayout;
