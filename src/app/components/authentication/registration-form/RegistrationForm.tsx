import React, { FC, useState } from 'react';
import { RegistrationFormWrapper } from './RegistrationForm.styled';
import { connect } from 'react-redux';
import { registerUser } from '../../../actions/authActions';
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

interface RegistrationFormProps {
  onRedirect: () => void; // Add this prop
}

const RegistrationForm: FC<RegistrationFormProps> = ({ onRedirect }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    registerUser(formData);
    const userWithVerification = { ...formData, isVerified: false };
    sessionStorage.setItem('registeredUser', JSON.stringify(userWithVerification));
    setAuthenticated(true); 
    navigate('/verification-route');
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
      <MDBInput wrapperClass='mb-4' label='Name' id='name' type="text" name="name" value={formData.name} onChange={handleChange}/>
      <MDBInput wrapperClass='mb-4' label='Username' id='username' type="text" name="username" value={formData.username} onChange={handleChange}/>
      <MDBInput wrapperClass='mb-4' label='Email' id='email' type="email" name="email" value={formData.email} onChange={handleChange}/>
      <MDBInput wrapperClass='mb-4' label='Password' id='password' type="password" name="password" value={formData.password} onChange={handleChange}/>

      <div className='d-flex justify-content-center mb-4'>
        <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
      </div>

      <MDBBtn className="mb-4 w-100" type="submit">Sign up</MDBBtn>
    </form>
  );
 };

 export default connect(null, { registerUser })(RegistrationForm);
