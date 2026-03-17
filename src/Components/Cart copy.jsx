import React,{useState} from 'react'

export default function Cart() {

  let [cart,setCart]=useState(false);

  function cartState()
  {
    setCart(!cart);
  }
  function cartTrigger(){
    return cart===true?'cart-details-container':'cart-details-container-hidden';
  }
  return (
    <div className='cart-bucket'  onClick={cartState}>
        <h1>My Cart</h1>
        <div className={cartTrigger()}></div>
    </div>
  )
}

