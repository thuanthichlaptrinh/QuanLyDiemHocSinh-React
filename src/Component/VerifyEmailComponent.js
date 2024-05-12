// VerifyEmail.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const VerifyEmail = () => {
  const [verificationStatus, setVerificationStatus] = useState('Xác minh email...');
  const location = useLocation();
  const token = new URLSearchParams(location.search).get('token');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.put(`http://localhost:8080/api/v1/auth/verify?token=${token}`);
        const message = response.data.message || 'Xác minh email thành công.';
        setVerificationStatus(message);
      } catch (error) {
        console.error('Error:', error);
        setVerificationStatus('Xác minh email thất bại.');
      }
    };

    if (token) {
      verifyEmail();
    }
  }, [token]);

  return (
    <div>
      <h2>Xác minh Email</h2>
      <p>{verificationStatus}</p>
    </div>
  );
};

export default VerifyEmail;
