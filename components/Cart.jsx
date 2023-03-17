import React from 'react';
import { CartContext } from './CartContext';
import { useContext } from 'react';

function Cart(props) {

  const product = props.product;
  const cart = useContext(CartContext);

  const productQuantity = product.id ? cart.getProductQuantity(product.id) : 0;
  
  return (
    <div className='w-full text-center'>
        <div className=''>
          <div>
          <h1 className='text-2xl text-red-600'>{product.name}</h1>
          <p className='text-xl text-gray-500'>{product.price}$</p>
          <p className='text-sm md:text-md 2xl:text-xl mb-2 text-gray-400'>{product.ingredients}</p>

          { productQuantity > 0 ?
                <>
                  <div className=' text-gray-500  flex justify-center items-center'>
                    <div className='text-red-500 flex md:text-xl border-4 border-slate-300 rounded-xl'>
                    <p className='ml-1'>In Cart: {productQuantity}</p>
                    <button onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</button>
                    <button onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</button>
                  </div>
                </div>
                <button className='my-2 bg-red-500 border-4 border-red-500 rounded-lg hover:scale-110 duration-200 2xl:text-xl' onClick={() => cart.deleteFromCart(product.id)}>Remove from Cart</button>
            </>
              : <button className='my-2 bg-red-500 border-4 border-red-500 rounded-lg hover:scale-110 duration-200 2xl:text-xl' onClick={() => cart.addOneToCart(product.id)}> Add to Cart</button>
            }
          </div>

        </div>

    </div>
  )
}

export default Cart;