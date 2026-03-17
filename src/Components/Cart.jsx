import React,{useState} from 'react'

export default function Cart(props) {

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
        <div className={cartTrigger()}>
            {
              props.products.map(item=>(
                (item.quantity>=1)?
                <li>{item.pname} <br/> <li>{item.price} * {item.quantity} = {item.price*item.quantity} </li>  <br/> </li>
                :""
              ))
            }
        </div>
    </div>
  )
}

