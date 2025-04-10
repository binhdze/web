import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [orders, setOrders] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const updateQuantity = (productId, action) => {
        setCart((prevCart) =>
            prevCart.map((product) => {
                if (product.id === productId) {
                    if (action === "increase") {
                        return { ...product, quantity: product.quantity + 1 };
                    } else if (action === "decrease" && product.quantity > 1) {
                        return { ...product, quantity: product.quantity - 1 };
                    }
                }
                return product;
            })
        );
    };

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const placeOrder = ({ name, address, info }) => {
        const newOrder = {
            id: Date.now(),
            name,
            address,
            info,
            items: [...cart],
        };

        setOrders((prevOrders) => [...prevOrders, newOrder]);
        setCart([]); // clear cart after placing order
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                totalItems,
                totalPrice,
                orders,
                placeOrder,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
