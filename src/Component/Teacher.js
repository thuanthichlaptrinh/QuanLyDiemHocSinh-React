import React, { useState } from 'react';
import avatar from '../assets/images/avatar.jpg';
import Teacher_info from './Teacher-info';
import Teacher_scores_info_class from './Teacher-scores-info-class';


const Teacher = () => {

    const [activeTab, setActiveTab] = useState('');
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <dv className="wrap">
                <div className="wr-menu">
                    <div className="wr-menu__info">
                        <img src={avatar} alt="avatar" className="wr-menu__info-avatar"></img>
                        <div className="wr-menu__info-msg">
                            <p className="wr-menu__info-position">Giáo viên</p>
                            <p className="wr-menu__info-name">Nguyễn Văn Tèo</p>
                        </div>
                    </div>
                    <div className="wr-menu__func">Quản lý chức năng</div>
                    <ul className="wr-menu__list">
                        <li className="wr-menu__list-item">
                            <a href="#" onClick={() => handleTabChange('info')} className="wr-menu__list-item-link">
                                <i class="wr-menu__list-item-link-icon fa-solid fa-user"></i>
                                Quản lý thông tin lớp
                            </a>
                        </li>
                        <li className="wr-menu__list-item">
                            <a href="#" onClick={() => handleTabChange('scores_class')} className="wr-menu__list-item-link">
                                <i class="wr-menu__list-item-link-icon fa-solid fa-chalkboard-user"></i>
                                Điểm thông tin lớp
                            </a>
                        </li>
                        <li className="wr-menu__list-item">
                            <a href="#" onClick={() => handleTabChange('imput_scores')} className="wr-menu__list-item-link">
                                <i class="wr-menu__list-item-link-icon fa-solid fa-hat-wizard"></i>
                                Nhập Điểm
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="wr-info">
                    {activeTab === 'info' && <Teacher_info />}
                    {activeTab === 'scores_class' && <Teacher_scores_info_class />}
                    {/* {activeTab === 'input_scores' && <Teacher_input_scores />} */}
                </div>
            </dv>
        </div>
    );
};
export default Teacher;
