// LoginForm.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../api/AuthenticationService';
import decodeToken from '../Admin/decodeToken';
import setAuthToken from '../Admin/Auth';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await UserService.signin({ email, password });
            if (response.data && response.data.token) {
                localStorage.setItem('token', response.data.token);
                setAuthToken(response.data.token);

                // Kiểm tra vai trò của người dùng và chuyển hướng tới trang admin nếu vai trò là ADMIN
                const decodedToken = decodeToken(response.data.token);
                if (decodedToken.role === 'ADMIN') {
                    navigate('/admin');
                } else {
                    navigate('/'); // Chuyển hướng đến trang chính nếu vai trò không phải là ADMIN
                }
            } else {
                setError('Invalid response from server');
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data);
            } else {
                setError('An error occurred. Please try again later.');
            }
        }
    };

    return (
        <div className="container mb-0">
            <form onSubmit={handleSubmit} id="form-login">
                <h2 className="text-center">Đăng nhập</h2>
                {error && <p className="text-danger">{error}</p>}
                <div className="mb-3 mt-20">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        placeholder="Nhập tài khoản"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3 ">
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        placeholder="Nhập mật khẩu"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary mb-20 mt-20">
                    Login
                </button>
                <p>
                    Không có tài khoản? <Link to="/signup">Đăng ký</Link>
                </p>
            </form>
        </div>
    );
};

export default LoginForm;
