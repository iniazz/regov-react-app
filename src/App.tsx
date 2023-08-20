import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import RegistrationForm from './app/components/authentication/registration-form/RegistrationForm';
import LoginForm from './app/components/authentication/login-form/LoginForm';
import ForgotPasswordForm from './app/components/authentication/forgot-password-form/ForgotPasswordForm';
import VerificationPage from './app/components/authentication/verification-page/VerificationPage';
import UserDashboard from './app/components/dashboard/user/UserDashboard';
import AdminDashboard from './app/components/dashboard/admin/AdminDashboard';
import EKycPage from './app/components/e-kyc/Ekyc';
import OrderPage from './app/components/order/order-page/Order';

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

import logo from './logo.svg';
import './App.css';

function App() {
  const registeredUser = JSON.parse(sessionStorage.getItem('registeredUser') || 'null');

  const [activeTab, setActiveTab] = useState('register');
  const [showTabs, setShowTabs] = useState(true);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleRedirect = () => {
    setShowTabs(false); // Hide the tabs after redirection
  };

  return (
    <Provider store={store}>
      {/* <div className="App">
        <header className="App-header"> */}
          <Router>
            <MDBContainer>
            {showTabs && (
              <MDBTabs justify className="mb-3">
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleTabChange('register')} active={activeTab === 'register'}>
                    Register
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleTabChange('login')} active={activeTab === 'login'}>
                    Login
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleTabChange('forgot-password')} active={activeTab === 'forgot-password'}>
                    Forgot Password
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>
            )}
              

              <MDBTabsContent>
                <MDBTabsPane show={showTabs && activeTab === 'register'}>
                  <RegistrationForm onRedirect={handleRedirect} />
                </MDBTabsPane>
                <MDBTabsPane show={showTabs && activeTab === 'login'}>
                  <LoginForm onRedirect={handleRedirect}/>
                </MDBTabsPane>
                <MDBTabsPane show={showTabs && activeTab === 'forgot-password'}>
                  <ForgotPasswordForm onRedirect={handleRedirect}/>
                </MDBTabsPane>
              </MDBTabsContent>
            </MDBContainer>
            {/* <nav>
              <ul>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/forgot-password">Forgot Password</Link>
                </li>
              </ul>
            </nav> */}

            <Routes>
              <Route path="/register" element={<RegistrationForm onRedirect={function (): void {
            throw new Error('Function not implemented.');
          } } />} />
              <Route path="/login" element={<LoginForm onRedirect={function (): void {
            throw new Error('Function not implemented.');
          } } />} />
              <Route path="/forgot-password" element={<ForgotPasswordForm onRedirect={function (): void {
            throw new Error('Function not implemented.');
          } } />} />
              <Route path="/verification-route/:token" element={<VerificationPage />} />
              <Route path="/user-dashboard" element={<UserDashboard userData={registeredUser} orders={[]} />} />
              <Route path="/ekyc" element={<EKycPage />} />
              <Route path="/cloth-order" element={<OrderPage />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
            </Routes>
          </Router>
        {/* </header>
      </div> */}
    </Provider>
  );
}

export default App;
