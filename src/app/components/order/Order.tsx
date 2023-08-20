import React, { FC } from 'react';
import { OrderWrapper } from './Order.styled';

interface OrderProps {}

const OrderPage: FC<OrderProps> = () => (
 <OrderWrapper data-testid="Order">
    Order Component
 </OrderWrapper>
);

export default OrderPage;
