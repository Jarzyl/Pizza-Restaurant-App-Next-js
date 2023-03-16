import Footer from '@/components/Footer'
import Navbar from '@/components/Nav'
import '@/styles/globals.css'
import Cancel from './Cancel'
import CartProvider from './CartContext'
import Success from './Success'
// import { BrowserRouter, Routes, Route} from "react-router-dom";
import FormDataContextProvider from './FormDataContextProvider'

export default function App({ Component, pageProps }) {
  return (
    // <FormDataContextProvider>
    <CartProvider>
    <Component {...pageProps} />
    {/* <Footer/> */}
    </CartProvider>
    // </FormDataContextProvider>
  )
}