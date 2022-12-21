import React from 'react';
import { render, screen } from '@testing-library/react';
import Hstack from './Hstack';

const defaultProps = {
  onClick: jest.fn(),
  children: 'Hstack',
};

describe('<Hstack />', () => {
  it('should render', () => {
    render(<Hstack {...defaultProps} />);

    expect(screen.getByTestId('hstack-comp')).toMatchSnapshot();
  });

  it('should render children', () => {
    render(<Hstack {...defaultProps} />);

    expect(screen.getByText(/Hstack/i)).toBeInTheDocument();
  });

  it('should allow custom className', () => {
    const props = {
      ...defaultProps,
      className: 'Custom',
    };
    render(<Hstack {...props} />);

    expect(screen.getByTestId('hstack-comp')).toHaveProperty('className');
  });

  it('should only allow row stacks', () => {
    render(<Hstack {...defaultProps} />);

    expect(screen.getByTestId('hstack-comp')).toHaveStyle('flex-direction: row');
  });
});
