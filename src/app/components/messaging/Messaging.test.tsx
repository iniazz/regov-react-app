import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Messaging from './Messaging';

describe('<Messaging />', () => {
  test('it should mount', () => {
    render(<Messaging />);
    
    const messaging = screen.getByTestId('Messaging');

    expect(messaging).toBeInTheDocument();
  });
});