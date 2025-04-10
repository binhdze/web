import React from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "./CartContext";

const OrderDetails = () => {
    const { id } = useParams();
    const { orders } = useCart();

    const order = orders.find((o) => o.id.toString() === id);

    if (!order) {
        return (
            <div className="container mt-5 text-center">
                <div className="alert alert-danger" role="alert">
                    Không tìm thấy đơn hàng!
                </div>
                <Link to="/donhang" className="btn btn-outline-secondary mt-3">
                    ← Quay lại danh sách đơn
                </Link>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <div className="card shadow p-4">
                <h2 className="text-center text-primary mb-4">Chi tiết đơn hàng #{order.id}</h2>

                <div className="row mb-4">
                    <div className="col-md-4">
                        <h6 className="text-muted">Họ & Tên</h6>
                        <p>{order.name}</p>
                    </div>
                    <div className="col-md-4">
                        <h6 className="text-muted">Địa chỉ</h6>
                        <p>{order.address}</p>
                    </div>
                    <div className="col-md-4">
                        <h6 className="text-muted">Ghi chú</h6>
                        <p>{order.info}</p>
                    </div>
                </div>

                <h5 className="mb-3">Danh sách sản phẩm</h5>
                <ul className="list-group mb-4">
                    {order.items.map((item, index) => (
                        <li
                            key={index}
                            className="list-group-item d-flex justify-content-between align-items-center"
                        >
                            <div className="d-flex align-items-center">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="rounded-circle me-3"
                                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
                                />
                                <div>
                                    <h6 className="mb-0">{item.name}</h6>
                                    <small className="text-muted">
                                        {item.price.toLocaleString()} VNĐ x {item.quantity}
                                    </small>
                                </div>
                            </div>
                            <span className="badge bg-success fs-6">
                                {(item.price * item.quantity).toLocaleString()} VNĐ
                            </span>
                        </li>
                    ))}
                </ul>

                <div className="text-end">
                    <h4>
                        Tổng tiền:{" "}
                        <span className="text-danger fw-bold">
                            {order.items
                                .reduce((sum, item) => sum + item.price * item.quantity, 0)
                                .toLocaleString()}{" "}
                            VNĐ
                        </span>
                    </h4>
                    <Link to="/donhang" className="btn btn-outline-primary mt-4">
                        ← Quay lại danh sách đơn
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
