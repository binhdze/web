import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./component/GioHang/Cart";
import Menu from "./component/Menu";
import { CartProvider } from "./component/GioHang/CartContext";
import OrderList from "./component/GioHang/OderList";
import Register from "./component/Register";
import Login from "./component/Login";
import Footer from "./component/Footer";
import AboutUs from "./component/AboutUs";
import HomePage from "./component/HomePage";
import MensClothing from "./component/MensClothing";
import WomenClothing from "./component/WomenClothing";
import KidClothing from "./component/KidClothing";
import Blog from "./component/Blog";
import Hangmoive from "./component/Hangmoive";
import OrderDetails from "./component/GioHang/OrderDetails";

function App() {
    return (
        <CartProvider>
            <Router>

                <Menu />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/giohang" element={<Cart />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/donhang" element={<OrderList />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/mens" element={<MensClothing />} />
                    <Route path="/womens" element={<WomenClothing />} />
                    <Route path="/kids" element={<KidClothing />} />
                    <Route path="/blog" element={<Blog/>} />
                    <Route path="/new-arrivals" element={<Hangmoive/>} />
                    <Route path="/donhang/:id" element={<OrderDetails/>} />
                </Routes>

                <Footer />
            </Router>
        </CartProvider>
    );
}

export default App;
