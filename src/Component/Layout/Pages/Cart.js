import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';


const Cart = ({cart}) => {
    const [CART, setCART] = useState([])
    useEffect(() => {
        setCART(cart)
    }, [cart])
  return (
    <div className='mainv'>
       
    {
        CART?.map((cartItem, cartindex) => {
            return (
                <div className='product-main'>
                    <img src={cartItem.img} width={110} height={150} />
                    <span> {cartItem.title} </span>
                    <button
                    className='minus'
                        onClick={() => {
                            const _CART = CART.map((item, index) => {
                                return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                            })
                            setCART(_CART)
                        }}
                    >-</button>
                    <span> {cartItem.quantity} </span>
                    <button className='plus'
                        onClick={() => {
                            const _CART = CART.map((item, index) => {
                                return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                            })
                            setCART(_CART)
                        }}
                    >+</button>
                    <span > Rs. {cartItem.price * cartItem.quantity} </span>
                    <CloseIcon style={{cursor:"pointer"}} 
                    onClick={()=>alert('will be delete soon')}/>
                </div>

              
            )
        })
    }

    <p> Total  <span></span>
        {
            CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
        }
    </p>
</div >
  )
}

export default Cart