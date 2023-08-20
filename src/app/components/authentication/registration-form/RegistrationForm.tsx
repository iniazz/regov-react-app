import React, { FC, useState } from 'react';
import { RegistrationFormWrapper } from './RegistrationForm.styled';
import { connect } from 'react-redux';
import { registerUser } from '../../../actions/authActions';
import { useNavigate } from 'react-router-dom';
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

// interface RegistrationFormProps {}

// const RegistrationForm: FC<RegistrationFormProps> = () => (
//  <RegistrationFormWrapper data-testid="RegistrationForm">
//     RegistrationForm Component
//  </RegistrationFormWrapper>
// );

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
    // Handle form submission logic
    registerUser(formData);
    const userWithVerification = { ...formData, isVerified: false };
    sessionStorage.setItem('registeredUser', JSON.stringify(userWithVerification));
    console.log(sessionStorage.getItem('registeredUser'));
    console.log(navigate('/verification-route'))
    navigate('/verification-route');
    onRedirect();
    // localStorage.setItem('registeredUser', JSON.stringify(formData));
    // console.log(localStorage.getItem('registeredUser'));
    // setFormData({
    // name: '',
    // email: '',
    // password: ''
    // })
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
      <MDBInput wrapperClass='mb-4' label='Name' id='form1' type="text" name="name" value={formData.name} onChange={handleChange}/>
      <MDBInput wrapperClass='mb-4' label='Username' id='form1' type="text" name="username" value={formData.username} onChange={handleChange}/>
      <MDBInput wrapperClass='mb-4' label='Email' id='form1' type="email" name="email" value={formData.email} onChange={handleChange}/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form1' type="password" name="password" value={formData.password} onChange={handleChange}/>

      <div className='d-flex justify-content-center mb-4'>
        <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
      </div>

      <MDBBtn className="mb-4 w-100" type="submit">Sign up</MDBBtn>


      {/* <h2>Registration Form</h2>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </div>
      <button type="submit">Register</button> */}
    </form>
  );
 };

 export default connect(null, { registerUser })(RegistrationForm);
