import React, { useState } from 'react';

import Register from './Register';
import QuenMatKhau from './QuenMatKhau';

const Login = () => {
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

    const [formData, setFormData] = useState({
        username: '',
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
        console.log('Login data:', formData);
        alert('Đăng nhập với: ' + JSON.stringify(formData));
    };

    if (isForgotPasswordOpen) {
        return <QuenMatKhau onBack={() => setIsForgotPasswordOpen(false)} />;
    }

    if (isRegisterOpen) {
        return <Register onBackToLogin={() => setIsRegisterOpen(false)} />;
    }

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="login-box p-4 shadow-lg rounded bg-white w-100" style={{ maxWidth: '500px' }}>
                <h2 className="text-center mb-4 text-primary font-weight-bold">Đăng nhập</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Tên đăng nhập</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Nhập tên đăng nhập"
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Mật khẩu</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Nhập mật khẩu"
                            required
                            className="form-control"
                        />
                    </div>
                    <button type="submit" className="btn btn-warning w-100">
                        Đăng nhập
                    </button>
                </form>
                <div className="login-links text-center mt-3">
                    <p
                        onClick={() => setIsForgotPasswordOpen(true)}
                        className="text-primary"
                        style={{ cursor: 'pointer' }}
                    >
                        Quên mật khẩu?
                    </p>
                    <p
                        onClick={() => setIsRegisterOpen(true)}
                        className="text-warning"
                        style={{ cursor: 'pointer' }}
                    >
                        Đăng ký ngay
                    </p>
                    <a href="/dang-nhap-google" className="text-warning">
                        Đăng nhập bằng Google
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
