import React from 'react';
import Box, { BoxProps } from '../Box/Box';
import { FCC } from 'types';

const CenterStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const Center: FCC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box {...CenterStyles} {...props} data-testid="center-comp">
      {children}
    </Box>
  );
};

export default Center;
