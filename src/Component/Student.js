import React, { useState } from 'react';
import avatar from '../assets/images/avatar.jpg';
import Student_info from './Student-info';
import Student_scores from './Student-scores';
const Student = () => {

    const [activeTab, setActiveTab] = useState('');
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div className='all'>
            <div className="wrap">
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
                            <a href='/src/Component/Student-info' onClick={() => handleTabChange('info')} className="wr-menu__list-item-link">
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
                            <a href='#' onClick={() => handleTabChange('scores')} className="wr-menu__list-item-link">
                                <i class="wr-menu__list-item-link-icon fa-solid fa-hat-wizard"></i>
                                Điểm số
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="wr-info">
                    {activeTab === 'info' && <Student_info />}
                    {activeTab === 'scores' && <Student_scores />}
                </div>
            </div>
        </div>
    );
};
export default Student;
