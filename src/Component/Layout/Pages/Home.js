import React from 'react'
import './App.css';
import Products from './Api';


const Home = ({addToCart}) => {

  return (
    <div className='flex'>
    {
        Products.map((productItem, productIndex) => {
            return (
                <div style={{ width: '33%' }}>
                    <div className='product-item'>
                        <img src={productItem.img} width={250} height={350} />
                        <p>{productItem.title} | {productItem.category} </p>
                        <p> {productItem.description} </p>
                        <p> Rs. {productItem.price} /-</p>
                        <button
                         onClick={() => addToCart(productItem)}
                            
                        >Add To Cart</button>
                    </div>
                </div>
            )
        })
    }
</div>
  )
}

export default Home