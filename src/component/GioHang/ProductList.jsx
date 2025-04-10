import { useCart } from "./CartContext";
import "./productlist.css";
import iPhone15 from "../images/iphone-15-pink-1-650x650.jpg";
import galaxy from"../images/s24.jpg"
import pixel8 from "../images/pixel.jpg"

const products = [
    { id: 1, name: "iPhone 15", price: 999, image: iPhone15  },
    { id: 2, name: "Samsung Galaxy S24", price: 899, image: galaxy },
    { id: 3, name: "Google Pixel 8", price: 799, image: pixel8 }
];

const ProductList = () => {
    const { addToCart } = useCart();

    return (
        <div className="product-list">
            <h2>📦 Available Products</h2>
            {products.map((product) => (
                <div key={product.id} className="product-item">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <span  className="product-name">{product.name} - ${product.price}</span>
                    <button className="add-to-cart" onClick={() => addToCart(product)}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
