import React from 'react';

const PessangerList = (props)=>{
    console.log("Prop in component ", props.ticketDetails);
    const pessangers = props.ticketDetails.map((pessanger, key) =>
    <tr key={pessanger._id}>
        <td>{pessanger._id} </td>
        <td>{pessanger.pessangerName} </td>
        <td>{pessanger.timeSlot} </td>
       </tr>
    );
    return(
         <div>
            <h6>List of Pessangers</h6>
            <table className="table">
            <th>Booking Id</th>
            <th>Passanger Name</th>
            <th>Time Slot</th>
            {pessangers}
            </table>
        </div>
    )
}

export default PessangerList;