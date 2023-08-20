import React, { FC } from 'react';
import { UserDashboardWrapper } from './UserDashboard.styled';
import { Link } from 'react-router-dom';

interface UserDashboardProps {
  userData: UserData;
  orders: Order[];
}

interface UserData {
  name: string;
  email: string;
}

interface Order {
  clothingType: string;
  measurements: { [key: string]: string };
}

const UserDashboard: FC<UserDashboardProps> = ({ userData, orders }) => (
 <UserDashboardWrapper data-testid="UserDashboard">
    <div>
      <h2>Welcome to Your Dashboard</h2>
      <p>Here's your user-specific information:</p>
      <div>
        <h3>User Information</h3>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
      <div>
        <h3>Orders</h3>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Clothing Type</th>
              <th>Measurements</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{order.clothingType}</td>
                <td>
                  <ul>
                    {Object.keys(order.measurements).map((measurement) => (
                      <li key={measurement}>
                        {measurement}: {order.measurements[measurement]}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/ekyc">Complete eKYC</Link>
      <Link to="/cloth-order">Place a New Order</Link>
    </div>
 </UserDashboardWrapper>
);

export default UserDashboard;
