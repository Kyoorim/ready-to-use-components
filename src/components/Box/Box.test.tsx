import React from 'react';
import { render, screen } from '@testing-library/react';
import Box from './Box';

const defaultProps = {
  onClick: jest.fn(),
  children: 'Box',
};

describe('<Box />', () => {
  it('should render', () => {
    render(<Box {...defaultProps} />);

    expect(screen.getByTestId('box-comp')).toBeInTheDocument();
  });

  it('should render children', () => {
    render(<Box {...defaultProps} />);

    expect(screen.getByText(/Box/i)).toBeInTheDocument();
  });

  it('should allow custom className', () => {
    const props = {
      ...defaultProps,
      className: 'Custom',
    };
    render(<Box {...props} />);

    expect(screen.getByTestId('box-comp')).toHaveProperty('className');
  });
});
