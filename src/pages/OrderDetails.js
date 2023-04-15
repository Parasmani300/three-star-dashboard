import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function () {
    const location = useLocation();
    const [shipped,setShipped] = useState(false);

    const updateStatus = async() => {
        const url = `https://server-x.vercel.app/order/changeOrderStatus?uid=${location.state.order.orderId}&status=${location.state.order.status == 'Ordered'?'Shipped':'Delivered'}`;
        const update = await axios.put(url);
        const data = await update.status;
        console.log(data);
        setShipped(true);
    }

    useEffect(() => {
        console.log(location);
    })
  return (
    <div className='card'>
        <div className='card-header'>
            <h1>{location.state.order.item.name}</h1>
        </div>
        <div className='card-body'>
        <p><b> OrderId: </b> {location.state.order.orderId} </p>
        <p><b> Customer Name: </b> {location.state.order.name} </p>
        <p><b> Price: </b> {location.state.order.item.price} </p>
        <p><b> Item Name: </b> {location.state.order.item.name} </p>
        <p><b> CID: </b> {location.state.order.uid} </p>
        <p><b> Date: </b> {location.state.order.date} </p>
        <p><b> Time: </b> {location.state.order.time} </p>
        <p><b> Address: </b> {location.state.order.address} </p>
        <p><b> Addition message: </b> {location.state.order.message}</p>
        <p><b> Current Status: </b> {location.state.order.status} </p>
        {location.state.order.status == 'Ordered'  &&<button className='btn btn-primary' onClick={()=>updateStatus()} disabled={shipped}>{shipped?"Shipped":"Ship Item"}</button>}
        {location.state.order.status == 'Shipped'  &&<button className='btn btn-primary' onClick={()=>updateStatus()} disabled={shipped}>{shipped?"Delivered":"Deliver Item"}</button>}
        </div>
    </div>
  )
}
