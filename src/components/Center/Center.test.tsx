import React from 'react';
import { render, screen } from '@testing-library/react';
import Center from './Center';

const defaultProps = {
  onClick: jest.fn(),
  children: 'Center',
};

describe('<Center />', () => {
  it('should render', () => {
    render(<Center {...defaultProps} />);

    expect(screen.getByTestId('center-comp')).toMatchSnapshot();
  });

  it('should render children', () => {
    render(<Center {...defaultProps} />);

    expect(screen.getByText(/Center/i)).toBeInTheDocument();
  });

  it('should have all items centered', () => {
    render(<Center {...defaultProps} />);

    expect(screen.getByTestId('center-comp')).toHaveStyle('display: flex; justify-content:center; align-items:center');
  });
});
