import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const VerificationPage = () => {
  const navigate = useNavigate();
  const { token } = useParams(); // Get the verification token from the URL
  console.log('Token:', token);
  useEffect(() => {
   console.log('VerificationPage useEffect executed')
    // Get the user data and verification status from sessionStorage
    const userWithVerification = JSON.parse(sessionStorage.getItem('registeredUser') || 'null');

    if (userWithVerification && userWithVerification !== null && !userWithVerification.isVerified) {
      // Simulate verification by setting isVerified to true
      userWithVerification.isVerified = true;
      sessionStorage.setItem('registeredUser', JSON.stringify(userWithVerification));
      
      alert('Account verified successfully! You can now login.');
      console.log('Before navigate');
      navigate('/login'); // Redirect to the login page
      console.log('After navigate');
    } else {
      // The user is already verified or the data is missing
      // Show an appropriate message to the user.
      alert('Account verified successfully! You can now login.');
    }
  }, []);

  return (
    <div>
      Verifying your account...
      {/* You can show loading indicators or messages here */}
    </div>
  );
};

export default VerificationPage;
