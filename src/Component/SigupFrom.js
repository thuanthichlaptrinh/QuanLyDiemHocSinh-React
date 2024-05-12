import React, { useState } from 'react';
import UserService from '../api/AuthenticationService';
import { colors } from '@mui/material';

const SignupForm = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Gửi yêu cầu đăng ký người dùng đến backend
            const response = await UserService.signup({
                firstname,
                lastname,
                email,
                password,
            });
            // Xử lý phản hồi từ backend
            console.log(response.data);
            window.location.href = '/signin';
        } catch (error) {
            // Xử lý lỗi nếu có
            console.error('Error:', error);
            if (error.response && error.response.data && error.response.data.errorMessage) {
                setErrorMessage(error.response.data.errorMessage);
            } else {
                setErrorMessage('An error occurred while signing up.');
            }
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2 className="color-primary">Đăng ký</h2>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}{' '}
                {/* Hiển thị thông báo lỗi nếu có */}
                <div className="mb-3 text-left">
                    <label htmlFor="firstname" className="form-label">
                        <span>* </span>Họ và tên
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstname"
                        value={firstname}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="mb-3 text-left">
                    <label htmlFor="lastname" className="form-label">
                        <span>* </span>Số điện thoại
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastname"
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="mb-3 text-left">
                    <label htmlFor="email" className="form-label">
                        <span>* </span> Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3 text-left">
                    <label htmlFor="password" className="form-label">
                        <span>* </span>Mật khẩu
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Gửi
                </button>
            </form>
        </div>
    );
};

export default SignupForm;
