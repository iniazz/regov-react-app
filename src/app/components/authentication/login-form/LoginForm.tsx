import React, { FC, useState } from 'react';
import { LoginFormWrapper } from './LoginForm.styled';
import { connect, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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

interface AuthState {
  isAuthenticated: boolean;
}

interface RootState {
  auth: AuthState;
}

interface LoginFormState {
  email: string;
  password: string;
}

interface LoginFormProps {
  onRedirect: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ onRedirect }) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  
  const [formData, setFormData] = useState<LoginFormState>({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const registeredUser = JSON.parse(sessionStorage.getItem('registeredUser') || 'null');
    console.log(registeredUser)
    if (registeredUser && formData.email === registeredUser.email && formData.password === registeredUser.password) {
      
      console.log('Login successful');
      setAuthenticated(true); 
      navigate('/user-dashboard')
    } else {
      console.log('Login failed');
    }
    onRedirect();
 
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <MDBInput wrapperClass='mb-4' label='Email' id='email' type="email" name="email" value={formData.email} onChange={handleChange}/>
      <MDBInput wrapperClass='mb-4' label='Password' id='password' type="password" name="password" value={formData.password} onChange={handleChange}/>

      <MDBBtn className="mb-4 w-100" type="submit">Login</MDBBtn>
    </form>
  );
};

export default LoginForm;
