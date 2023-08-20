import React, { FC } from 'react';
import { UserDashboardWrapper } from './UserDashboard.styled';
import { Link } from 'react-router-dom';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';

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
      <p>Here's your information:</p>
      <div>
        <h3>User Profile</h3>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
      <div>
        <h3>Orders</h3>
        <MDBTable>
          <MDBTableHead>
            <tr>
              <th>Order ID</th>
              <th>Clothing Type</th>
              <th>Measurements</th>
              <th>Status</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
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
                <td>Pending</td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </div>
      <div className="d-grid gap-2 d-md-block">
        <MDBBtn tag={Link} to="/ekyc" color="primary" className="mb-2 me-2">
          Complete eKYC
        </MDBBtn>
        <MDBBtn tag={Link} to="/cloth-order" color="primary" className="mb-2">
          Place a New Order
        </MDBBtn>
      </div>
    </div>
 </UserDashboardWrapper>
);

export default UserDashboard;
