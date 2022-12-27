import React from 'react';
import { render, screen } from '@testing-library/react';
import SimpleGrid from './SimpleGrid';

const defaultProps = {
  onClick: jest.fn(),
  children: 'SimpleGrid',
};

describe('<SimpleGrid />', () => {
  it('should render', () => {
    render(<SimpleGrid {...defaultProps} />);

    expect(screen.getByTestId('simpleGrid-comp')).toBeInTheDocument();
  });

  it('should render children', () => {
    render(<SimpleGrid {...defaultProps} />);

    expect(screen.getByText(/SimpleGrid/i)).toBeInTheDocument();
  });

  it('should allow custom className', () => {
    const props = {
      ...defaultProps,
      className: 'Custom',
    };
    render(<SimpleGrid column={3} {...props} />);

    expect(screen.getByTestId('simpleGrid-comp')).toHaveProperty('className');
  });

  it('should render items under grid style', () => {
    render(<SimpleGrid {...defaultProps} />);

    expect(screen.getByTestId('simpleGrid-comp')).toHaveStyle('display: grid');
  });
});
