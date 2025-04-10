

import React, { useState } from 'react';
import { useCart } from '../component/GioHang/CartContext';
import "./CSS/MensClothing.css"
const WomenClothing = () => {
    const { addToCart } = useCart();

    const products = [
        {
            id: 101,
            name: "Áo sơ mi nữ",
            description: "Chất liệu vải thoáng mát, kiểu dáng thời trang.",
            image: "/assets/shirt-women.jpg",
            price: 320000
        },
        {
            id: 102,
            name: "Quần Jeans nữ",
            description: "Quần jeans với chất liệu bền và thiết kế ôm vừa vặn.",
            image: "/assets/jeans-women.jpg",
            price: 450000
        },
        {
            id: 103,
            name: "Đầm dạ tiệc",
            description: "Thiết kế sang trọng, tôn dáng, phù hợp cho tiệc tối.",
            image: "/assets/evening-dress.jpg",
            price: 650000
        }
    ];


    const [searchText, setSearchText] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const filteredProducts = products.filter((product) => {
        const matchesName = product.name.toLowerCase().includes(searchText.toLowerCase());
        const matchesMin = minPrice === '' || product.price >= parseInt(minPrice);
        const matchesMax = maxPrice === '' || product.price <= parseInt(maxPrice);
        return matchesName && matchesMin && matchesMax;
    });

    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center fw-bold text-uppercase mb-4">Thời trang nữ</h2>

            <div className="row">
                {/* Bộ lọc bên trái */}
                <div className="col-md-3 mb-4">
                    <div className="card p-3 shadow-sm">
                        <h5 className="fw-bold mb-3">Bộ lọc</h5>

                        <div className="mb-3">
                            <label className="form-label">Tìm theo tên:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ví dụ: áo, quần..."
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Giá tối thiểu:</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="0"
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Giá tối đa:</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="1.000.000"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                            />
                        </div>

                        <button
                            className="btn btn-outline-secondary w-100 rounded-pill mt-2"
                            onClick={() => {
                                setSearchText('');
                                setMinPrice('');
                                setMaxPrice('');
                            }}
                        >
                            Xóa bộ lọc
                        </button>
                    </div>
                </div>

                {/* Sản phẩm bên phải */}
                <div className="col-md-9">
                    <div className="row">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((item) => (
                                <div className="col-md-4 mb-4" key={item.id}>
                                    <div className="card h-100 shadow-sm rounded-lg overflow-hidden">
                                        <img
                                            src={item.image}
                                            className="card-img-top"
                                            alt={item.name}
                                            style={{ height: "300px", objectFit: "cover" }}
                                        />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">{item.description}</p>
                                            <p className="fw-bold text-primary">{item.price.toLocaleString()}₫</p>
                                            <button
                                                className="btn btn-outline-success rounded-pill w-75"
                                                onClick={() => addToCart(item)}
                                            >
                                                Thêm vào giỏ hàng
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-muted">Không tìm thấy sản phẩm phù hợp.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WomenClothing;

