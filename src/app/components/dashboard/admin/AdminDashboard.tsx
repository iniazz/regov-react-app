import React, { FC } from 'react';
import { AdminDashboardWrapper } from './AdminDashboard.styled';

interface AdminDashboardProps {}

const clothApplications = [
   { id: 1, user: 'User A', type: 'Shirt', status: 'Pending' },
   { id: 2, user: 'User B', type: 'Dress', status: 'Approved' },
 ];

const AdminDashboard: FC<AdminDashboardProps> = () => (
 <AdminDashboardWrapper data-testid="AdminDashboard">
    AdminDashboard Component
    <div>
      <h2>Admin Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Cloth Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {clothApplications.map(application => (
            <tr key={application.id}>
              <td>{application.id}</td>
              <td>{application.user}</td>
              <td>{application.type}</td>
              <td>{application.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 </AdminDashboardWrapper>
);

export default AdminDashboard;
