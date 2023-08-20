import React, { useState } from 'react';
import { EKycWrapper } from './Ekyc.styled';
import { useNavigate } from 'react-router-dom';
// import FaceCaptureComponent from './FaceCaptureComponent';
// import CredentialUploadComponent from './CredentialUploadComponent';

const EKycPage = () => {
  const [faceCaptured, setFaceCaptured] = useState(false);
  const [credentialsUploaded, setCredentialsUploaded] = useState(false);
  const navigate = useNavigate()

  const handleFaceCapture = () => {
    setFaceCaptured(true);
  };

  const handleCredentialsUpload = () => {
    setCredentialsUploaded(true);
  };

  const handleSubmitEKyc = () => {
    navigate('/user-dashboard');
  };

  return (
    <EKycWrapper data-testid="EKyc">
      <h2>eKYC Page</h2>
      <div>
        <h3>Face Capture</h3>
        {faceCaptured ? <p>Face captured successfully</p> : <button onClick={handleFaceCapture}>Capture Face</button>}
      </div>
      <div>
        <h3>Credentials Upload</h3>
        {credentialsUploaded ? (
          <p>Credentials uploaded successfully</p>
        ) : (
          <button onClick={handleCredentialsUpload}>Upload Credentials</button>
        )}
      </div>
      {faceCaptured && credentialsUploaded && (
      <button onClick={handleSubmitEKyc}>Submit eKYC</button>)}
    </EKycWrapper>
  );
};

export default EKycPage;
