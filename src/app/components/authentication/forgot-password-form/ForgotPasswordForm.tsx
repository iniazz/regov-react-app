import React, { FC, useState } from 'react';
import { ForgotPasswordFormWrapper } from './ForgotPasswordForm.styled';
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
   const [formData, setFormData] = useState<LoginFormState>({
    email: '',
    password: '',
  });

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
      <MDBInput wrapperClass='mb-4' label='Email' id='email' type="email" name="email" value={formData.email} onChange={handleChange}/>

      <MDBBtn className="mb-4 w-100" type="submit">Reset Password</MDBBtn>
       {/* <h2>Forgot Password</h2>
       <div>
         <label>Email:</label>
         <input type="email" value={email} onChange={handleChange} />
       </div>
       <button type="submit">Reset Password</button> */}
     </form>
   );
 };

export default ForgotPasswordForm;
