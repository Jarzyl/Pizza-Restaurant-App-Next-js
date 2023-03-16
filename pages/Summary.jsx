import Footer from '@/components/Footer';
import { useContext } from 'react';
import { FormDataContext } from '../components/FormDataContext';


export default function Summary() {
//   const { formData } = useContext(FormDataContext);

  return (
    <>
    <div className="max-w-md mx-auto my-4 p-4 bg-white rounded-md shadow-md text-yellow-500">
      <h1 className="text-xl font-bold mb-4">Order Summary</h1>
      <div className="mb-4">
        <p className="font-bold">Name:</p>
        {/* <p>{formData.firstName} {formData.lastName}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Address:</p>
        <p>{formData.delivery ? formData.address : 'N/A'}</p>
      </div>
      {formData.delivery && (
        <div className="mb-4">
          <p className="font-bold">Delivery Instructions:</p>
          <p>{formData.deliveryInstructions}</p>
        </div>
      )}
      <div className="mb-4">
        <p className="font-bold">Phone Number:</p>
        <p>{formData.phoneNumber}</p> */}
      </div>
      <div className="mb-4">
        <p className="font-bold">Order Type:</p>
        {/* <p>{formData.delivery ? 'Delivery' : 'Pickup'}</p>
      </div>
      {formData.delivery && (
        <div className="mb-4">
          <p className="font-bold">Delivery Time:</p>
          <p>{formData.deliveryTime}</p> */}
        </div>
      {/* )} */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Place Order
      </button>
    </div>
    <Footer/>
    </>
  );
}
