import Image from 'next/image';
import React from 'react';

function PizzaItem({id, img, name, price, ingredients}) {
  return (
    <div className='w-full text-center '>
    <Image src={img} width={200} alt='pizza' className='mx-auto hover:scale-110 duration-300'/>
    <h1 className='text-2xl text-red-600'>{name}</h1>
    <p className='text-xl text-gray-500'>{price}</p>
    <button className='bg-red-500 border-2 border-gray-300 rounded-lg hover:scale-110 duration-200' onClick={() => addToCart(id)}><a className='m-1  text-white'>Add</a></button>
    <p className='text-xs mb-2 text-gray-400'>{ingredients}</p>
    </div>
  );
};

export default PizzaItem;