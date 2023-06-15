import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import { ProductProvider } from "./context/product/ProductContext"
import { CartProvider } from "./context/cart/CartContext"
import Contact from "./pages/Contact"
import AllProducts from "./pages/AllProducts"
import { ToastContainer } from "react-toastify"
function App() {
 return (
    <Router>
     <ProductProvider>
     <CartProvider>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/AllProducts" element={<AllProducts/>}/>
     </Routes>
     <Footer/>
     <ToastContainer/>
     </CartProvider>
     </ProductProvider>
    </Router>
  )
}

export default App
