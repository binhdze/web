import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import React from "react";

const OrderList = () => {
    const { orders } = useCart();

    if (!orders || orders.length === 0) {
        return <p className="text-center mt-5">Chưa có đơn hàng nào.</p>;
    }

    return (
        <div className="container mt-5">
            {orders.map((order) => (
                <div key={order.id} className="order-item mb-4 p-4 border rounded shadow-sm">
                    <h2 className="text-center mb-4 text-primary">Thông tin giao hàng</h2>
                    <div className="row mb-3">
                        <div className="col-md-4">
                            <strong className="text-muted">Thông tin</strong>
                            <p>{order.info}</p>
                        </div>
                        <div className="col-md-4">
                            <strong className="text-muted">Họ & Tên</strong>
                            <p>{order.name}</p>
                        </div>
                        <div className="col-md-4">
                            <strong className="text-muted">Địa chỉ</strong>
                            <p>{order.address}</p>
                        </div>
                    </div>
                    <div className="order-items mb-3">
                        {order.items.map((item, index) => (
                            <div key={index} className="d-flex align-items-center mb-2 p-2 border rounded shadow-sm">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="order-item-image rounded-circle"
                                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
                                />
                                <div className="ms-3">
                                    <p className="mb-0">{item.name}</p>
                                    <p className="mb-0 text-muted">{item.price.toLocaleString()} VNĐ x {item.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h4 className="mt-3">Tổng giá trị: <span className="text-success">{order.items.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString()} VNĐ</span></h4>
                        <Link to={`/donhang/${order.id}`} className="btn btn-primary">Xem chi tiết</Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OrderList;
