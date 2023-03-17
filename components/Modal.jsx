import React, { useContext } from "react";
import { TfiShoppingCart } from 'react-icons/tfi'
import { AiOutlineClose } from 'react-icons/ai'
import { CartContext } from '@/components/CartContext';
import CartProduct from "./CartProduct";
import Link from "next/link";

export default function Modal() {

    const cart = useContext(CartContext);

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    const [showModal, setShowModal] = React.useState(false);
    return (
    <>
      <button className="ml-5 flex hover:scale-125 duration-200"
        type="button" onClick={() => setShowModal(true)}>
        <TfiShoppingCart size={25}/><p>{productsCount}</p>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl md:text-3xl text-gray-400">
                    Your Cart
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}>
                    <p className="text-red-500 h-6 w-6 text-2xl block">
                      <AiOutlineClose size={25}/></p>
                  </button>
                </div>
                {/*body*/}
                <div className="relative pl-6 pr-6 flex-auto">
                  <p className="my-4 text-md md:text-xl leading-relaxed">
                    {productsCount > 0 ?
                        <>
                            <p className="text-gray-500">Pizza in your cart:</p>
                            {cart.items.map((currentProduct, idx) => (
                                  <CartProduct key={idx}
                                  name={currentProduct.name}  
                                  id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            ))}
                            <h1 className="text-gray-500">Total Cost: {cart.getTotalCost().toFixed(2)}$</h1>
                        </>
                    :
                      <h1 className="text-gray-500 text-center text-md md:text-2xl">There are no pizza in your cart!</h1>
                    }</p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                  <button className="text-red-500 font-bold uppercase px-6 py-2 text-md mr-1 mb-1 hover:scale-110 duration-200"
                    type="button"
                    onClick={() => setShowModal(false)}>
                    Close
                  </button>
                  <Link href='/CartPage'
                    className=" text-emerald-500  font-bold uppercase text-md px-6 py-3 mr-1 mb-1 hover:scale-110 duration-200"
                    type="button"> Go to Cart!
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};