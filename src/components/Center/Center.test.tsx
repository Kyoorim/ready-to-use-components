import React from 'react';
import { render, screen } from '@testing-library/react';
import Center from './Center';

const defaultProps = {
  children: 'Center',
};

describe('<Center />', () => {
  it('should render', () => {
    render(<Center {...defaultProps} />);

    expect(screen.getByTestId('center-comp')).toBeInTheDocument();
  });

  it('should render children', () => {
    render(<Center {...defaultProps} />);

    expect(screen.getByText(/Center/i)).toBeInTheDocument();
  });

  it('should allow custom className', () => {
    const props = {
      ...defaultProps,
      className: 'Custom',
    };
    render(<Center {...props} />);

    expect(screen.getByTestId('center-comp')).toHaveProperty('className');
  });
});
