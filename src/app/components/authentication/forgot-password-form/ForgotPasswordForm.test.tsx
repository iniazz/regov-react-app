import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ForgotPasswordForm from './ForgotPasswordForm';

describe('<ForgotPasswordForm />', () => {
  test('it should mount', () => {
    render(<ForgotPasswordForm onRedirect={function (): void {
      throw new Error('Function not implemented.');
    } } />);
    
    const forgotPasswordForm = screen.getByTestId('ForgotPasswordForm');

    expect(forgotPasswordForm).toBeInTheDocument();
  });
});