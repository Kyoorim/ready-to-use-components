import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import Hstack from './Hstack';
import { CustomProps } from 'components/Stack';
import Box from '../Box/Box';

export default {
  title: 'Hstack',
  component: Hstack,
} as Meta<CustomProps>;

export const Default: FC = () => {
  return (
    <Hstack>
      <Box backgroundColor={'red'}>1</Box>
      <Box backgroundColor={'green'}>2</Box>
      <Box backgroundColor={'blue'}>3</Box>
    </Hstack>
  );
};
