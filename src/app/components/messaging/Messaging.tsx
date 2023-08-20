import React, { FC } from 'react';
import { MessagingWrapper } from './Messaging.styled';

interface MessagingProps {}

const Messaging: FC<MessagingProps> = () => (
 <MessagingWrapper data-testid="Messaging">
    Messaging Component
 </MessagingWrapper>
);

export default Messaging;
