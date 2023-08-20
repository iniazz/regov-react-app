import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VerificationPage from './VerificationPage';

describe('<VerificationPage />', () => {
  test('it should mount', () => {
    render(<VerificationPage />);
    
    const verificationPage = screen.getByTestId('VerificationPage');

    expect(verificationPage).toBeInTheDocument();
  });
});