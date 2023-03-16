import { CartContext } from "@/pages/CartContext";
import { useContext } from "react";
import { getProductData } from "@/components/products";

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);
    return (
        <div className="text-emerald-500 grid grid-cols-2">
            <div>
            <img src={productData.img} alt={productData.name} className="w-32 h-32 object-cover" />
            <h1 className="mt-2 ">{productData.name}</h1>
            <p>Quantity: {quantity}</p>
            <p>Price: {(quantity * productData.price).toFixed(2)}$</p>
            <hr className=" h-0.5 mt-2"></hr>
            </div>
            <div className="justify-self-end">
            <button className="text-black bg-red-500 border-4 border-red-500 rounded-lg mt-16" onClick={() => cart.deleteFromCart(id)}>Remove</button>
            
            </div>
        </div>
    );
};

export default CartProduct;