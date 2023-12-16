import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart,useCart } from './ContextReducer';

function Card(props) {

    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("")
    const priceRef = useRef();
    let dispatch = useDispatchCart();
    let data = useCart();
    const options = props.options;
    const priceOptions = Object.keys(options)

    const handleAddToCart = async () =>{
        let food = [];
        for(const item of data){
            if(item.id == props.foodItems._id){
                food = item;
                break;
            }
        }
        if(food.length != 0){
            if(food.size == size){
                await dispatch({type:"UPDATE",id:props.foodItems._id,price:finalPrice,qty:qty})
                return;
            }
        }
        else if(food.size !== size){
            await dispatch({
                type:"ADD",
                id:props.foodItems._id,
                name:props.foodItems.name,
                price:finalPrice,
                qty:qty,
                size:size,
                img:props.foodItems.img
            })
            return;
        }
        return;
        
    }

    let finalPrice = qty * parseInt(options[size]);

    useEffect(()=>{
        setSize(priceRef.current.value)
    },[])

  return (
    <div>
        <div>
                <div className="card mt-3" style={{ "width": "18rem","maxHeight":"360px" }}>
                    <img src={props.foodItems.img} alt="..." style={{height:"120px", objectFit:"fill"}} />
                    <div className="card-body">
                        <h5 className="card-title">{props.foodItems.name}</h5>
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-success rounded' onChange={(e)=> setQty(e.target.value)}>
                                {Array.from(Array(6),(e,i)=>{
                                    return (
                                        <option key = {i+1} value={i+1}>{i+1}</option>
                                    )
                                })}
                            </select>
                            <select className='m-2 h-100 bg-success rounded' ref = {priceRef} onChange={(e)=> setSize(e.target.value)}>
                               {
                                priceOptions.map(item=>{
                                    return(
                                        <option key = {item} value={item}>{item}</option>
                                    )
                                })
                               }
                            </select>
                            <div className='d-inline h-100 fs-5'>
                                ₹{finalPrice}/-
                            </div>
                        </div>
                        <hr>
                        </hr>
                        <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>Add To Cart</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Card