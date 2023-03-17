import React from 'react';
import { PizzaArray } from '@/components/products';
import Image from 'next/image';
import Cart from '@/components/Cart';

function Menu() {
  return (
    <section className='bg-white pt-12 pb-1 px-2 md:px-10' id='menu'>
    <div className='justify-self-center text-center mt-5 pt-5 m-5'>
    <p className='text-3xl mb-5 md:text-6xl 2xl:text-7xl md:mt-10 text-gray-400'>Menu</p>
    <p className='text-sm md:text-xl 2xl:text-2xl ml-10 mr-10 text-gray-400'>Discover a world of delicious pizzas and sides at our restaurant. Our menu features a variety of handcrafted pizzas with fresh, high-quality ingredients and a range of toppings to satisfy every craving. From classic pepperoni to unique creations, our menu has something for everyone. Come enjoy a slice or two with your friends and family today.</p>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-5'>
    {PizzaArray.map((product, idx) => (
        <div key={idx}>
          <Image src={product.img} width={200} height={100} alt='pizza' className='mx-auto hover:scale-110 duration-300' /> 
          <Cart product={product} />
        </div>))}
    </div>
    <p className='text-sm md:text-xl 2xl:text-2xl mt-3 text-gray-400'>
    We offer a 40cm pizza.</p>
    <p className='text-sm md:text-xl 2xl:text-2xl mt-3 2xl:mt-0 text-gray-400'>
    Sauces to choose from: tomato and garlic.</p>
    </div>
    </section>
  );
};

export default Menu;