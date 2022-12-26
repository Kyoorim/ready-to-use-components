import React from 'react';
import { render, screen } from '@testing-library/react';
import Stack from './Stack';

const defaultProps = {
  onClick: jest.fn(),
  children: 'Stack',
};

describe('<Stack />', () => {
  it('should render', () => {
    render(<Stack {...defaultProps} />);

    expect(screen.getByTestId('stack-comp')).toBeInTheDocument();
  });

  it('should render children', () => {
    render(<Stack {...defaultProps} />);

    expect(screen.getByText(/Stack/i)).toBeInTheDocument();
  });

  it('should allow custom className', () => {
    const props = {
      ...defaultProps,
      className: 'Custom',
    };
    render(<Stack {...props} />);

    expect(screen.getByTestId('stack-comp')).toHaveProperty('className');
  });
});
