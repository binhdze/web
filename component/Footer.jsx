import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white py-4">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row w-100">
                    <div className="col-12 col-md-6 text-center text-md-start">
                        <p>© 2025 Sato Store</p>
                    </div>
                    <div className="col-12 col-md-6 text-center text-md-end">
                        <div className="footer-links">
                            <a href="/about" className="text-white mx-2">Giới thiệu</a>
                            <a href="/contact" className="text-white mx-2">Liên hệ</a>
                            <a href="/policy" className="text-white mx-2">Chính sách bảo mật</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
