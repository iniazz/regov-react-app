import React, { FC, useState } from 'react';
import { ForgotPasswordFormWrapper } from './ForgotPasswordForm.styled';
import { setAuthenticated } from './../../../utils/authUtils';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
interface ForgotPasswordFormProps {
  onRedirect: () => void; // Add this prop
}

interface LoginFormState {
  email: string;
  password: string;
}

const ForgotPasswordForm: FC<ForgotPasswordFormProps> = ({ onRedirect }) => {
  const [email, setEmail] = useState('');
  const [isResetRequested, setIsResetRequested] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate a request to the server to reset password
    // You can replace this with your actual API call
    // For now, we'll just set isResetRequested to true
    setIsResetRequested(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      {isResetRequested ? (
        <p>Reset password link sent to your email. Please check your inbox.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <MDBInput
            wrapperClass='mb-4'
            label='Email'
            id='email'
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <MDBBtn className="mb-4 w-100" type="submit">
            Reset Password
          </MDBBtn>
        </form>
      )}
    </div>
  );
};


export default ForgotPasswordForm;
