import './App.css';
import React, { useState } from 'react';
import FooterComponent from './Component/FooterComponent';
import HeaderComponent from './Component/HeaderComponent';
import LoginForm from './Component/LoginForm';
import SignupForm from './Component/SigupFrom';
import Student from './Component/Student';
import Teacher from './Component/Teacher';
import Admin from './Component/Admin';
import VerifyEmail from './Component/VerifyEmailComponent';
import AdminComponent from './Admin/HeaderAdmin';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    const [userRole, setUserRole] = useState('');

    const handleLogin = (role) => {
        setUserRole(role);
    };

    return (
        <div className="App">
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path="/signin" element={<LoginForm />} />
                    <Route path="/signup" element={<SignupForm />} />
                    <Route path="/student" element={<Student />} />
                    <Route path="/teacher" element={<Teacher />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
                {/* <Home /> */}
                {/* <FooterComponent /> */}
            </BrowserRouter>
        </div>
    );
}

export default App;
