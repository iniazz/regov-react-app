import React, { FC, useState } from 'react';
import { ForgotPasswordFormWrapper } from './ForgotPasswordForm.styled';

// interface ForgotPasswordFormProps {}

// const ForgotPasswordForm: FC<ForgotPasswordFormProps> = () => (
//  <ForgotPasswordFormWrapper data-testid="ForgotPasswordForm">
//     ForgotPasswordForm Component
//  </ForgotPasswordFormWrapper>
// );
interface ForgotPasswordFormProps {
  onRedirect: () => void; // Add this prop
}

const ForgotPasswordForm: FC<ForgotPasswordFormProps> = ({ onRedirect }) => {
   const [email, setEmail] = useState('');
 
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     // Handle form submission logic
     onRedirect();
   };
 
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     setEmail(e.target.value);
   };
 
   return (
     <form onSubmit={handleSubmit}>
       <h2>Forgot Password</h2>
       <div>
         <label>Email:</label>
         <input type="email" value={email} onChange={handleChange} />
       </div>
       <button type="submit">Reset Password</button>
     </form>
   );
 };

export default ForgotPasswordForm;
