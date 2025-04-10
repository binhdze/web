import React, { useState } from 'react';
import { FaEnvelope, FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const QuenMatKhau = ({ onBack }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('✅ Nếu email tồn tại, chúng tôi đã gửi hướng dẫn khôi phục mật khẩu.');
    };

    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="bg-white p-4 shadow rounded-4 border">
                        <h3 className="text-center mb-3 fw-bold">
                            <span className="text-primary">QUÊN </span>
                            <span className="text-warning">MẬT KHẨU</span>
                        </h3>
                        <p className="text-center text-muted mb-4">
                            Vui lòng nhập địa chỉ email bạn đã đăng ký. Chúng tôi sẽ gửi liên kết để đặt lại mật khẩu của bạn.
                        </p>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="form-label fw-semibold">
                                    <FaEnvelope className="me-2 text-primary" />
                                    Email đã đăng ký:
                                </label>
                                <input
                                    type="email"
                                    className="form-control rounded-pill px-4"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary rounded-pill px-4"
                                    onClick={onBack}
                                >
                                    <FaArrowLeft className="me-2" />
                                    Hủy
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary rounded-pill px-4"
                                >
                                    Tiếp tục <FaArrowRight className="ms-2" />
                                </button>
                            </div>
                        </form>

                        {message && (
                            <div className="alert alert-success text-center mt-4 mb-0 py-2 rounded-pill">
                                {message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuenMatKhau;
