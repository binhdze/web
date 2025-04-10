import React, { useEffect, useState } from "react";
import { useCart } from "./GioHang/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Carousel } from "bootstrap";
import "./CSS/HomePage.css";
import banner1 from "./images/banner1.jpg"
import banner2 from "./images/banner2.png"
import banner3 from "./images/banner3.png"
const HomePage = () => {
    const { addToCart } = useCart();

    // Khởi tạo carousel khi component mount
    useEffect(() => {
        const carouselElement = document.querySelector('#carouselExampleAutoplaying');
        if (carouselElement) {
            new Carousel(carouselElement, {
                interval: 3000,
                ride: 'carousel',
            });
        }
    }, []);

    // Danh mục
    const categories = [
        { name: "Đồ nam", image: "/assets/doNam.jpg" },
        { name: "Áo thun nam", image: "/assets/AoThun.jpg" },
        { name: "Áo hoodie nam", image: "/assets/AoHodie.jpg" },
        { name: "Đồ nữ", image: "/assets/doNu.jpg" },
    ];

    // Sản phẩm
    const products = [
        { id: 1, name: "Sản phẩm 1", price: 250000, image: "/assets/product1.jpg" },
        { id: 2, name: "Sản phẩm 2", price: 300000, image: "/assets/product2.jpg" },
        { id: 3, name: "Sản phẩm 3", price: 200000, image: "/assets/product3.jpg" },
        { id: 4, name: "Sản phẩm 4", price: 400000, image: "/assets/product4.jpg" },
        { id: 5, name: "Sản phẩm 5", price: 350000, image: "/assets/product5.jpg" },
    ];

    // State bộ lọc
    const [searchText, setSearchText] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    // Lọc sản phẩm
    const filteredProducts = products.filter((product) => {
        const matchesName = product.name.toLowerCase().includes(searchText.toLowerCase());
        const matchesMin = minPrice === '' || product.price >= parseInt(minPrice);
        const matchesMax = maxPrice === '' || product.price <= parseInt(maxPrice);
        return matchesName && matchesMin && matchesMax;
    });

    return (
        <div className="container mb-4 m-auto mt-4">
            {/* Banner Carousel */}
            <div id="carouselExampleAutoplaying" className="carousel slide d-flex" data-bs-ride="carousel">

            <div className="carousel-inner rounded">
                    <div className="carousel-item active">
                        <img src={banner1} className="d-block w-100" style={{ maxHeight: "650px", objectFit: "cover" }} alt="Banner 1" />
                    </div>
                    <div className="carousel-item">
                        <img src={banner2} className="d-block w-100" style={{ maxHeight: "650px", objectFit: "cover" }} alt="Banner 2" />
                    </div>
                    <div className="carousel-item">
                        <img src={banner3} className="d-block w-100" style={{ maxHeight: "650px", objectFit: "cover" }} alt="Banner 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Danh mục nổi bật */}
            <div className="text-center mb-5 mt-5">
                <h2 className="fw-bold text-uppercase">Danh mục nổi bật</h2>
                <div className="row mt-4 justify-content-center">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="col-md-3 mb-3">
                            <div className="card h-100 shadow-sm rounded-lg overflow-hidden hover-zoom">
                                <img src={cat.image} className="card-img-top" alt={cat.name} />
                                <div className="card-body text-center">
                                    <h5 className="card-title text-primary">{cat.name}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bộ lọc + Danh sách sản phẩm */}
            <div className="row justify-content-center">
                {/* Bộ lọc */}
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

                {/* Danh sách sản phẩm */}
                <div className="col-md-9">
                    <h4 className="mb-4 text-primary">
                        Có {filteredProducts.length} sản phẩm được tìm thấy
                    </h4>
                    <div className="row">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="col-md-4 mb-4">
                                <div className="card h-100 shadow-sm rounded-lg overflow-hidden hover-shadow">
                                    <img
                                        src={product.image}
                                        className="card-img-top"
                                        alt={product.name}
                                        style={{
                                            height: "200px",
                                            objectFit: "cover",
                                            transition: "transform 0.3s"
                                        }}
                                    />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text text-primary fw-bold">
                                            {product.price.toLocaleString()}₫
                                        </p>
                                        <button
                                            className="btn btn-success w-100 rounded-pill shadow-sm"
                                            onClick={() => addToCart(product)}
                                        >
                                            Thêm vào giỏ hàng
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {filteredProducts.length === 0 && (
                            <p className="text-center text-muted">Không tìm thấy sản phẩm nào phù hợp.</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Custom CSS effects */}
            <style>{`
                .hover-zoom img:hover {
                    transform: scale(1.05);
                }
                .hover-shadow:hover {
                    box-shadow: 0 0 20px rgba(0,0,0,0.2);
                    transform: translateY(-5px);
                    transition: all 0.3s ease-in-out;
                }
                .carousel-inner img {
                    transition: transform 0.5s ease;
                }
            `}</style>
        </div>
    );
};

export default HomePage;
