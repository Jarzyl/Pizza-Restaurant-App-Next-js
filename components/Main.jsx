import React from 'react';
import PizzaLoad from './PizzaLoad';

function Main() {
  return (
      <section className='w-full flex items-center pt-12' id='main'>
      <div className='w-full md:grid grid-cols-2 gap-5 bg-red-500'>
      <div className='justify-self-center text-center mt-10 pt-10 text-white ml-5'>
    <p className='text-3xl md:text-6xl md:mt-10 hover:scale-110 duration-200'>TASTY & CRISPY</p>
    <hr className="w-1/2 mx-auto h-0.5 bg-white mb-2"></hr>
    <p className='text-5xl md:text-8xl font-bold hover:scale-110 duration-200'>BEST PIZZA</p>
    <hr className="w-1/2 mx-auto h-0.5 bg-white"></hr>
    <p className='text-3xl md:text-6xl font-bold mt-4 hover:scale-110 duration-200'>50% OFF TODAY</p>
    <hr className="w-1/2 mx-auto h-0.5 bg-white"></hr>
    <p className='text-3xl md:text-6xl font-bold mt-4 hover:scale-110 duration-200'>ORDER NOW</p>
    <hr className="w-1/2 mx-auto h-0.5 bg-white md:mb-10"></hr>
    </div>
    <div className='w-full mt-5'>
    <PizzaLoad/>
    </div>
      </div>
      </section>
  );
};

export default Main;