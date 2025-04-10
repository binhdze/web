import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import logo from './logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from './GioHang/CartContext';
import './CSS/Menu.css';
import { useState, useRef, useEffect } from 'react';

const Menu = () => {
    const navigate = useNavigate();
    const { totalItems } = useCart();
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef();

    // Đóng dropdown khi click ra ngoài
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow sticky-top py-3">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center" to="/home">
                    <img src={logo} alt="Logo" height="45" className="me-2 rounded-circle border border-2 border-dark" />
                    <span className="fw-bold fs-4 text-primary">Sato Store</span>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto gap-3">
                        <li className="nav-item">
                            <Link className="nav-link hover-underline" to="/about-us">Về chúng tôi</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link hover-underline" to="/blog">Blog</Link>
                        </li>

                        {/* Custom Dropdown React */}
                        <li className="nav-item position-relative" ref={dropdownRef}>
                            <span
                                className="nav-link hover-underline"
                                role="button"
                                onClick={() => setShowDropdown(!showDropdown)}
                            >
                                Sản phẩm ▾
                            </span>
                            {showDropdown && (
                                <ul className="position-absolute list-unstyled bg-white shadow rounded py-2 px-2 mt-1 p-2" style={{ zIndex: 1000 }}>
                                    <li className="p-2"><Link className="dropdown-item" to="/mens">Đồ Nam</Link></li>
                                    <li className="p-2"><Link className="dropdown-item" to="/womens">Đồ Nữ</Link></li>
                                    <li className="p-2"><Link className="dropdown-item" to="/kids">Trẻ Em</Link></li>
                                </ul>
                            )}
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link hover-underline" to="/new-arrivals">Hàng mới về</Link>
                        </li>
                    </ul>

                    {/* Search + Buttons */}
                    <div className="d-flex align-items-center gap-2">
                        <div className="input-group search-box me-2">
                            <input
                                type="text"
                                className="form-control form-control-sm border-end-0 shadow-sm"
                                placeholder="Tìm kiếm..."
                            />
                            <span className="input-group-text bg-white border-start-0">
                                <FaSearch className="text-secondary" />
                            </span>
                        </div>

                        <button className="btn btn-outline-primary btn-sm shadow-sm" onClick={() => navigate("/login")}>
                            Đăng nhập
                        </button>
                        <button className="btn btn-primary btn-sm shadow-sm" onClick={() => navigate("/register")}>
                            Đăng ký
                        </button>

                        <button className="btn btn-link text-dark fs-5 position-relative" onClick={() => navigate("/giohang")}>
                            <FaShoppingCart />
                            {totalItems > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
