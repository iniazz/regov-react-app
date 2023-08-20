import React, { FC } from 'react';
import { UserDashboardWrapper } from './UserDashboard.styled';
import { Link } from 'react-router-dom';

interface UserDashboardProps {}

const UserDashboard: FC<UserDashboardProps> = () => (
 <UserDashboardWrapper data-testid="UserDashboard">
    <div>
      <h2>Welcome to Your Dashboard</h2>
      <p>Here's your user-specific information:</p>
      {/* Display user-specific data here */}
      <Link to="/ekyc">Complete eKYC</Link>
      <Link to="/cloth-order">Place a New Order</Link>
      {/* Other links/actions */}
    </div>
 </UserDashboardWrapper>
);

export default UserDashboard;
