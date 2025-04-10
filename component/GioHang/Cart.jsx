import React from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cart, addToCart, removeFromCart, updateQuantity, totalItems, totalPrice, placeOrder } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        const orderDetails = {
            info: "Thông tin giao hàng",
            name: "Tên người nhận",
            address: "Địa chỉ",
            city: "Tỉnh",
            date: new Date().toLocaleDateString(),
        };

        placeOrder(orderDetails);

        alert("Đặt hàng thành công!");
        navigate("/donhang");
    };

    return (
        <div className="container my-5">
            <div className="row">

                <div className="col-md-8">
                    <h2 className="mb-4 text-primary font-weight-bold">Giỏ Hàng</h2>
                    <div className="cart-items">
                        {cart.length === 0 ? (
                            <p className="text-center text-muted">Giỏ hàng của bạn trống.</p>
                        ) : (
                            cart.map((product) => (
                                <div key={product.id} className="cart-item d-flex align-items-center mb-4 p-4 border rounded-lg shadow-sm rounded-3">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="product-image rounded"
                                        style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "8px" }}
                                    />
                                    <div className="cart-item-details mx-3 w-75">
                                        <h5 className="mb-2">{product.name}</h5>
                                        <p className="text-muted mb-3">{product.description}</p>
                                        <div className="d-flex align-items-center mb-3">
                                            <button
                                                className="btn btn-outline-primary p-2 mx-2"
                                                onClick={() => updateQuantity(product.id, "decrease")}
                                                style={{ minWidth: "30px", minHeight: "30px", fontSize: "1.2rem" }}
                                            >
                                                -
                                            </button>
                                            <span className="mx-2">{product.quantity}</span>
                                            <button
                                                className="btn btn-outline-primary p-2 mx-2"
                                                onClick={() => updateQuantity(product.id, "increase")}
                                                style={{ minWidth: "30px", minHeight: "30px", fontSize: "1.2rem" }}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <p className="price mb-2">
                                            <strong>Giá: {product.price.toLocaleString()} VND</strong>
                                        </p>
                                    </div>
                                    <button
                                        className="btn btn-danger p-3"
                                        onClick={() => removeFromCart(product.id)}
                                        style={{ minWidth: "50px", minHeight: "50px" }}
                                    >
                                        Xóa
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div className="col-md-4">
                    <h3 className="mb-4 text-success">Thông Tin Thanh Toán</h3>
                    <div className="cart-summary p-4 border rounded-lg shadow-sm rounded-3">
                        <p><strong>Tổng Số Lượng:</strong> {totalItems}</p>
                        <p><strong>Tổng Tiền:</strong> {totalPrice.toLocaleString()} VND</p>
                        <button className="btn btn-success w-100 rounded-pill py-2" onClick={handleCheckout}>
                            <i className="bi bi-credit-card"></i> Thanh Toán
                        </button>
                    </div>
                </div>
            </div>

            <div className="suggested-products mt-5 shadow-sm ps-4 pt-2 pe-4 rounded-3npm">
                <h4 className="text-center mb-4 text-primary ">Sản Phẩm Gợi Ý</h4>
                <div className="row">
                    {[...Array(4)].map((_, index) => (
                        <div className="col-md-3 mb-4" key={index}>
                            <div className="card shadow-lg hover-shadow rounded-lg">
                                <img src="product-image.jpg" alt="Product" className="card-img-top" />
                                <div className="card-body text-center">
                                    <h5 className="card-title text-primary">Sản phẩm {index + 1}</h5>
                                    <p className="card-text text-muted">Giá: {(100000 * (index + 1)).toLocaleString()} VND</p>
                                    <button
                                        className="btn btn-primary rounded-pill"
                                        onClick={() => addToCart({
                                            id: index + 1,
                                            name: `Sản phẩm ${index + 1}`,
                                            price: 100000 * (index + 1),
                                            image: 'product-image.jpg',
                                            description: `Mô tả sản phẩm ${index + 1}`
                                        })}
                                    >
                                        Thêm vào giỏ
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cart;
