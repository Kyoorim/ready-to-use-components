import React from 'react';
import Box, { BoxProps } from '../Box/Box';

const CenterStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Center: FCC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box {...CenterStyles} {...props} data-testid="center-comp">
      {children}
    </Box>
  );
};

export default Center;
