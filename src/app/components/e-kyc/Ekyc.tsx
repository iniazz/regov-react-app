import React, { FC, useState } from 'react';
import { EKycWrapper } from './Ekyc.styled';

interface EKycProps {}

const EKycPage: FC<EKycProps> = () => {
   const [faceCaptured, setFaceCaptured] = useState(false);
   const [credentialsUploaded, setCredentialsUploaded] = useState(false);

   return (
      <EKycWrapper data-testid="EKyc">
    EKyc Component
    <div>
      <h2>eKYC Page</h2>
      <div>
        <h3>Face Capture</h3>
        {faceCaptured ? <p>Face captured successfully</p> : <button>Capture Face</button>}
      </div>
      <div>
        <h3>Credentials Upload</h3>
        {credentialsUploaded ? <p>Credentials uploaded successfully</p> : <button>Upload Credentials</button>}
      </div>
      <button>Submit eKYC</button>
    </div>
 </EKycWrapper>
   )
};

export default EKycPage;
