import React, { useState } from 'react';
import { OrderWrapper } from './Order.styled';
import ClothingTypeSelector from './../clothing-selector/ClothingTypeSelector'; 
import MeasurementForm from './../measurement-form/MeasurementForm';
import UserDashboard from './../../dashboard/user/UserDashboard'; 
import { useNavigate } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';

interface Order {
  clothingType: string;
  measurements: any;
}

interface MeasurementData {
  [measurement: string]: string;
}

const PlaceNewOrder = () => {
  const registeredUser = JSON.parse(sessionStorage.getItem('registeredUser') || 'null');
  const [selectedClothingType, setSelectedClothingType] = useState('');
  const [measurementData, setMeasurementData] = useState<MeasurementData>({});
  const [submittedOrders, setSubmittedOrders] = useState<Order[]>([]);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const navigate = useNavigate();

  const handleClothingTypeSelect = (clothingType: React.SetStateAction<string>) => {
    setSelectedClothingType(clothingType);
  };

  const handleMeasurementSubmit = (data: React.SetStateAction<{}>) => {
    setMeasurementData(data);
  };

  const handleConfirmOrder = () => {
    const newOrder: Order = {
      clothingType: selectedClothingType,
      measurements: measurementData,
    };
  
    const existingOrdersJSON = localStorage.getItem('submittedOrders');
    const existingOrders = existingOrdersJSON ? JSON.parse(existingOrdersJSON) : [];
    const updatedOrders = [...existingOrders, newOrder];

    localStorage.setItem('submittedOrders', JSON.stringify(updatedOrders));

    setSubmittedOrders(updatedOrders);

    setSelectedClothingType('');
    setMeasurementData({});
    setOrderConfirmed(true);
    navigate('/user-dashboard');
  };

  return (
    <OrderWrapper data-testid="PlaceOrder">
      <h2>Place New Order</h2>
      <ClothingTypeSelector onSelect={handleClothingTypeSelect} />
      {selectedClothingType && (
        <MeasurementForm clothingType={selectedClothingType} onSubmit={handleMeasurementSubmit} />
      )}
      {measurementData && (
        <div>
          <h3>Order Summary</h3>
          <p>Selected Clothing Type: {selectedClothingType}</p>
          <p>Measurement Details:</p>
          <ul>
          {Object.keys(measurementData).map((measurement) => (
            <li key={measurement}>
              {measurement}: {measurementData[measurement]}
            </li>
          ))}
          </ul>
          <p>Calculated Cost: $100</p>
          {measurementData && <MDBBtn onClick={handleConfirmOrder}>Confirm Order</MDBBtn>}
        </div>
      )}
      {orderConfirmed && <UserDashboard orders={submittedOrders} userData={registeredUser} />}
    </OrderWrapper>
  );
};

export default PlaceNewOrder;
