
import '@/styles/globals.css'
import CartProvider from '../components/CartContext'

export default function App({ Component, pageProps }) {
  return (
    
    <CartProvider>
    <Component {...pageProps} />
    {/* <Footer/> */}
    </CartProvider>

  )
}