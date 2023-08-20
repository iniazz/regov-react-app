import React, { FC, useState } from 'react';
import { LoginFormWrapper } from './LoginForm.styled';
import { connect, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// interface LoginFormProps {}

// const LoginForm: FC<LoginFormProps> = () => (
//  <LoginFormWrapper data-testid="LoginForm">
//     LoginForm Component
//  </LoginFormWrapper>
// );

interface AuthState {
  isAuthenticated: boolean;
  // Add other properties from your auth state
}

interface RootState {
  auth: AuthState;
  // Add other reducers' states if needed
}

interface LoginFormState {
  email: string;
  password: string;
}

interface LoginFormProps {
  onRedirect: () => void; // Add this prop
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
    console.log(formData)
    // Handle form submission logic
    const registeredUser = JSON.parse(sessionStorage.getItem('registeredUser') || 'null');
    console.log(registeredUser)
    if (registeredUser && formData.email === registeredUser.email && formData.password === registeredUser.password) {
      // Perform successful login actions, such as updating the auth state, redirecting, etc.
      console.log('Login successful');
      navigate('/user-dashboard')
      // You can dispatch an action to update the auth state in Redux if needed
    } else {
      // Handle login failure, display error message, etc.
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
      <h2>Login Form</h2>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
