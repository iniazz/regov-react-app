import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EKyc from './Ekyc';

describe('<EKyc />', () => {
  test('it should mount', () => {
    render(<EKyc />);
    
    const eKyc = screen.getByTestId('EKyc');

    expect(eKyc).toBeInTheDocument();
  });
});