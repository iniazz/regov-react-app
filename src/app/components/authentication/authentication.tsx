import React, { FC } from 'react';
import { AuthenticationWrapper } from './authentication.styled';

interface AuthenticationProps {}

const Authentication: FC<AuthenticationProps> = () => (
 <AuthenticationWrapper data-testid="Authentication">
    Authentication Component
 </AuthenticationWrapper>
);

export default Authentication;
