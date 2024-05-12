import React, { useState } from 'react';
import avatar from '../assets/images/avatar.jpg';

const Student = () => {
    // const [showLoginForm, setShowLoginForm] = useState(false);
    // const [showSignupForm, setShowSignupForm] = useState(false);

    // const toggleLoginForm = () => {
    //     setShowLoginForm(!showLoginForm);
    //     setShowSignupForm(false); // Ẩn form đăng ký khi hiển thị form đăng nhập
    // };

    // const toggleSignupForm = () => {
    //     setShowSignupForm(!showSignupForm);
    //     setShowLoginForm(false); // Ẩn form đăng nhập khi hiển thị form đăng ký
    // };
    return (
        <div>
            <dv className="wrap">
                <div className="wr-menu">
                    <div className="wr-menu__info">
                        <img src={avatar} alt="avatar" className="wr-menu__info-avatar"></img>
                        <div className="wr-menu__info-msg">
                            <p className="wr-menu__info-position">Học sinh</p>
                            <p className="wr-menu__info-name">Ngô Minh Thuận</p>
                        </div>
                    </div>
                    <div className="wr-menu__func">Quản lý chức năng</div>
                    <ul className="wr-menu__list">
                        <li className="wr-menu__list-item">
                            <a href="" className="wr-menu__list-item-link">
                                <i class="wr-menu__list-item-link-icon fa-solid fa-user"></i>
                                Thông tin học sinh
                            </a>
                        </li>
                        <li className="wr-menu__list-item">
                            <a href="" className="wr-menu__list-item-link">
                                <i class="wr-menu__list-item-link-icon fa-solid fa-chalkboard-user"></i>
                                Thông tin giáo viên
                            </a>
                        </li>
                        <li className="wr-menu__list-item">
                            <a href="" className="wr-menu__list-item-link">
                                <i class="wr-menu__list-item-link-icon fa-solid fa-hat-wizard"></i>
                                Điểm số
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="wr-info"></div>
            </dv>
        </div>
    );
};
export default Student;
