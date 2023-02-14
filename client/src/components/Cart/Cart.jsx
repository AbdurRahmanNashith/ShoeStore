import React from 'react'
import "./Cart.scss"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {useSelector} from "react-redux";
import { removeItem, resetCart } from '../../redux/cartReducer';
import { useDispatch } from "react-redux";
import {makeRequest} from "../../makeRequest";
import {loadStripe} from '@stripe/stripe-js';

const Cart = () => {
const products = useSelector(state=>state.cart.products);
const dispatch = useDispatch();

const totalPrice = ()=>{
  let total = 0
  products.forEach((item)=>
    (total += item.quantity*item.price));
    return total.toFixed(2);
};

const stripePromise = loadStripe('pk_test_51Ma2GkSE3SlRGQEcx9uDaXGymHeHibi6jCoPBC5vMha85cRTOg7xnzDoCR4BzS6fkvEEjt85aSF0zxBwn3fkWDCn00y6MvaRAm');
const handlePayment = async () =>{
  try{
const stripe = await stripePromise;
const res = await makeRequest.post("/orders",{
  products,
});


  await stripe.redirectToCheckout({
    sessionId: res.data.stripeSession.id,
  });
  
  }catch(err){
    console.log(err)
  }
}
  return (
    <div className='Cart'>
      <h1>Products in your cart</h1>
      {products?.map(item=>(
        <div className="item" key={item.id}>
            <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0,100)} </p>
                <div className="price">{item.quantity} x ₹{item.price}</div>
            </div>
            <DeleteOutlineOutlinedIcon className="Delete" onClick={()=>dispatch(removeItem(item.id))} />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span> ₹{totalPrice()}</span>
        </div> 
        <button onClick={handlePayment}>PROCEED TO CHECKOUT</button> 
        <span className="reset" onClick={()=>dispatch(resetCart())}>Reset cart</span>
    </div>
  )
}

export default Cart
