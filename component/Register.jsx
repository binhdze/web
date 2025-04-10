import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = ({ onBackToLogin }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Register data:', formData);
        alert('Đăng ký với: ' + JSON.stringify(formData));
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundImage: 'url(your-image-url)', backgroundSize: 'cover' }}>
            <div className="bg-white p-4 rounded shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-4 text-primary">Đăng Ký</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Họ tên</label>
                        <input
                            type="text"
                            className="form-control"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Nhập họ tên"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Số điện thoại</label>
                        <input
                            type="tel"
                            className="form-control"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Nhập số điện thoại"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Địa chỉ email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Nhập địa chỉ email"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Mật khẩu</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Nhập mật khẩu"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-warning w-100 mb-3">
                        Đăng ký
                    </button>
                </form>
                <div className="text-center">
                    <p
                        onClick={onBackToLogin}
                        className="text-info"
                        style={{ cursor: 'pointer' }}
                    >
                        Bạn đã có tài khoản? Đăng nhập ngay
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
