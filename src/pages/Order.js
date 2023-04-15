import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation'

export default function Order() {
  const [data,setData] = useState([])
  const [search,setSearch] = useState("");

  const fetchOrder = async() => {
    const url = "https://server-x.vercel.app/order/getAllOrder";
    const snapShotRef = await axios.get(url);
    const snapshot = await snapShotRef.data;
    setData(snapshot);
  }

  const fetchOrderById = async() => {
    const url = `https://server-x.vercel.app/order/getOrderById?uid=${search}`;
    const snapShotRef = await axios.get(url);
    const snapshot = await snapShotRef.data;
    setData(snapshot);
  }

  useEffect(()=> {
    fetchOrder();
  },[])

  return (
    <div className='container-fluid' >
      <div className='row mt-3 mb-3'>
          <div className='col-md-9'>
              <div className='form-group'>
              <input type={"text"}
                 className="form-control" 
                 placeholder='Search By Order Id'
                 onChange={(e)=>setSearch(e.target.value)}
              />
              </div>
          </div>
          <div className='col-md-3'>
              <button className='btn btn-primary' onClick={()=> fetchOrderById()}>Search</button>
          </div>
      </div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">OrderId</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Detais/Change Status</th>
    </tr>
  </thead>
  <tbody>
    {data?.map((order,key) => { return <tr>
      <th scope="row">{key}</th>
      <td>{order.orderId}</td>
      <td>{order.date}</td>
      <td>{order.time}</td>
      <td>{order.item.name}</td>
      <td>{order.item.price}</td>
      <td><Link to="/details" state={{'order':order}}>View</Link></td>
    </tr>})}
  </tbody>
</table>
    </div>
  )
}
