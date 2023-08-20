import React, { useState } from 'react';
import { EKycWrapper } from './Ekyc.styled';
import { useNavigate } from 'react-router-dom';
// import FaceCaptureComponent from './FaceCaptureComponent';
// import CredentialUploadComponent from './CredentialUploadComponent';
import { MDBBtn } from 'mdb-react-ui-kit';

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
        {faceCaptured ? <p>Face captured successfully</p> :
          <MDBBtn onClick={handleFaceCapture} color="primary" className="mb-2 me-2">
          Capture Face
          </MDBBtn>
        }
      </div>
      <div>
        <h3>Credentials Upload</h3>
        {credentialsUploaded ? (
          <p>Credentials uploaded successfully</p>
        ) : (
          <MDBBtn onClick={handleCredentialsUpload} color="primary" className="mb-2 me-2">
            Capture Face
          </MDBBtn>
        )}
      </div>
      {faceCaptured && credentialsUploaded && (
        <MDBBtn onClick={handleSubmitEKyc} color="primary" className="mb-2 me-2">
        Submit eKYC
        </MDBBtn>
      )}
      
    </EKycWrapper>
  );
};

export default EKycPage;
