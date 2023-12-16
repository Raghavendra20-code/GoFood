import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function MyOrder() {
  const [orderData, setorderData] = useState([])

  const fetchMyOrder = async () => {
    console.log(localStorage.getItem('userEmail'))
    await fetch("http://localhost:8000/api/myOrderData", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            email:localStorage.getItem('userEmail')
        })
    }).then(async (res) => {
        let response = await res.json()
        
        await setorderData(response.orderData)
    })
}
useEffect(()=>{
  fetchMyOrder();
},[])
  return (
    <>
        <div>
            <Navbar/>
        </div>
        <div className='container'>
          <div className='row'>
            {
              orderData.length > 0 ? 
              orderData.map(data=>{
                return (
                  <div  >
                      {data.Order_date ? <div className='m-auto mt-5'>

                          {data.Order_date}
                          <hr />
                      </div> :
                        
                          <div className='col-12 col-md-6 col-lg-3' >
                              <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                  <img src={data.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                                  <div className="card-body">
                                      <h5 className="card-title">{data.name}</h5>
                                      <div className='container w-100 p-0' style={{ height: "38px" }}>
                                          <span className='m-1'>{data.qty}</span>
                                          <span className='m-1'>{data.size}</span> 
                                          <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                              ₹{data.price}/-
                                          </div>
                                      </div>
                                  </div>
                              </div>

                          </div>



                      }

                  </div>
              )
              }):""
            }
          </div>
        </div>
        <div>
            <Footer/>
        </div>
    </>
  )
}

export default MyOrder