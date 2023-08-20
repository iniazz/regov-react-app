import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const VerificationPage = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  console.log('Token:', token);
  useEffect(() => {
   console.log('VerificationPage useEffect executed')
    const userWithVerification = JSON.parse(sessionStorage.getItem('registeredUser') || 'null');

    if (userWithVerification && userWithVerification !== null && !userWithVerification.isVerified) {
      userWithVerification.isVerified = true;
      sessionStorage.setItem('registeredUser', JSON.stringify(userWithVerification));
      
      alert('Account verified successfully! You can now login.');
      console.log('Before navigate');
      navigate('/login');
      console.log('After navigate');
    } else {
      alert('Account verified successfully! You can now login.');
    }
  }, []);

  return (
    <div>
      Verifying your account...
    </div>
  );
};

export default VerificationPage;
