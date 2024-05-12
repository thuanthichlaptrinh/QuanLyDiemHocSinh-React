import React, { useState } from 'react';
import LoginForm from '../Component/LoginForm.js'; // Đường dẫn đến file LoginForm của bạn
import Logo from '../assets/images/logo.png';
import sidebar from '../assets/images/3.jpg';

const HeaderComponent = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showSignupForm, setShowSignupForm] = useState(false);

    const toggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
        setShowSignupForm(false); // Ẩn form đăng ký khi hiển thị form đăng nhập
    };

    const toggleSignupForm = () => {
        setShowSignupForm(!showSignupForm);
        setShowLoginForm(false); // Ẩn form đăng nhập khi hiển thị form đăng ký
    };

    return (
        <header>
            <div className="header">
                <div className="header__content center-body">
                    <div className="header__content-logo">
                        <a className="navbar-brand" href="/">
                            <img src={Logo} alt="logo" className="header__content-logo-img" />
                        </a>
                    </div>
                    <div className="header__content-msg">
                        <p className="header__content-msg-job">Hệ Thống Quản Lý Điểm</p>
                        <p className="header__content-msg-name">Trường THPT Trần Phú</p>
                    </div>
                    <div className="header__content-search">
                        <input type="search" className="header__content-search-input" placeholder="Tìm kiếm..." />
                        <i className="header__content-search-icon fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="header__content-account">
                        <a className="header__content-account-register" href="/signup" onClick={toggleSignupForm}>
                            Đăng ký
                        </a>

                        <a className="header__content-account-login" href="/signin" onClick={toggleLoginForm}>
                            Đăng Nhập
                        </a>
                    </div>
                </div>
                <div className="header__bottom center-body">
                    <div className="header__bottom-list">
                        <div className="header__bottom-list-item">
                            <i className="fa-solid fa-bars"></i>
                        </div>
                        <div className="header__bottom-list-item">
                            <a href="/" className="header__bottom-list-item-link">
                                Trang chủ
                            </a>
                        </div>
                        <div className="header__bottom-list-item">
                            <a href="/student" className="header__bottom-list-item-link">
                                Học sinh
                            </a>
                        </div>
                        <div className="header__bottom-list-item">
                            <a href="/teacher" className="header__bottom-list-item-link">
                                Giáo viên
                            </a>
                        </div>
                        <div className="header__bottom-list-item">
                            <a href="/admin" className="header__bottom-list-item-link">
                                Admin
                            </a>
                        </div>
                    </div>
                </div>
                <div className="header__bg center-body">
                    {/* <div className="header__bg-img">
                        <img className="header__bg-content-outstan-img" src={sidebar}></img>
                    </div> */}
                    <div className="header__bg-content">
                        <div className="header__bg-content-outstan"></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;
