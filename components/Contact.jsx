import Image from 'next/image';
import React from 'react';
import contact from '../public/img/contact.jpg'

function Contact() {
  return (
    <section className='w-full md:h-screen 2xl:h-screen pt-14 pb-4 text-white' id='contact'>
    <div className='text-3xl md:text-6xl 2xl:text-7xl md:mt-10 2xl:mt-20 text-white text-center bg-red-500'>Contact</div>
    <hr className="w-1/2 mx-auto h-0.5 mt-5 bg-white"></hr>  
    <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-5 pt-6 bg-red-500'>
    <Image src={contact} width={500} alt='contact'/>
    <div className='w-full text-xl md:text-2xl 2xl:text-3xl text-center mt-3'>
  
    <h1 className='mb-3'>FIND OUR RESTAURANTS</h1>
    <li>Carrer del Poeta Llorente, 12,<br/> Valencia 46021</li>
    <li>Carrer de la Pau, 9,<br/> Valencia 46003 </li>
    <li>Avinguda de Blasco Ibáñez, 152,<br/> Valencia 46022 </li>
    <br/>
    <br/>
    <p className='hover:scale-110 duration-200'>Order Now! 777-888-999</p>
    <hr className="w-1/2 mx-auto h-0.5 bg-white"></hr>
    </div>
    <div className='w-full text-xl md:text-2xl 2xl:text-3xl text-center mb-10 mt-3'>
    <h1 className='mb-3'>WE ARE OPEN</h1>
    <p>Monday - Friday</p>
    <p>12:00 - 22:00</p>
    <p>Saturday - Sunday</p>
    <p>12:00 - 00:00</p>
    <br/>
    <p>Order takeaway or come in and try it on the spot!</p>
    </div>
    </div>
    </section>
    
  );
};

export default Contact;