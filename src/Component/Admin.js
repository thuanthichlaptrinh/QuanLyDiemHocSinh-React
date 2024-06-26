import React, { useState } from 'react';
import avatar from '../assets/images/avatar.jpg';

const Teacher = () => {
    return (
        <div>
            <dv className="wrap">
                <div className="wr-menu">
                    <div className="wr-menu__info">
                        <img src={avatar} alt="avatar" className="wr-menu__info-avatar"></img>
                        <div className="wr-menu__info-msg">
                            <p className="wr-menu__info-position">Admin</p>
                            <p className="wr-menu__info-name">Nguyễn Văn A</p>
                        </div>
                    </div>
                    <div className="wr-menu__func">Quản lý chức năng</div>
                    <ul className="wr-menu__list">
                        <li className="wr-menu__list-item">
                            <a href="" className="wr-menu__list-item-link">
                                <i class="wr-menu__list-item-link-icon fa-solid fa-user"></i>
                                Quản lý thông tin học sinh
                            </a>
                        </li>
                        <li className="wr-menu__list-item">
                            <a href="" className="wr-menu__list-item-link">
                                <i class="wr-menu__list-item-link-icon fa-solid fa-chalkboard-user"></i>
                                Quản lý thông tin giáo viên
                            </a>
                        </li>
                        <li className="wr-menu__list-item">
                            <a href="" className="wr-menu__list-item-link">
                                <i class="wr-menu__list-item-link-icon fa-solid fa-people-roof"></i>
                                Quản lý thông tin lớp
                            </a>
                        </li>
                        <li className="wr-menu__list-item">
                            <a href="" className="wr-menu__list-item-link">
                                <i class="wr-menu__list-item-link-icon fa-solid fa-arrow-down-up-lock"></i>
                                Tra cứu thông tin
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="wr-info"></div>
            </dv>
        </div>
    );
};
export default Teacher;
