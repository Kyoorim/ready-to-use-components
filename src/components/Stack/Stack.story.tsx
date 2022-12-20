import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import Stack, { StackProps } from './Stack';
import Box from '../Box/Box';

export default {
  title: 'Stack',
  component: Stack,
} as Meta<StackProps>;

export const Default: FC = () => {
  return (
    <Stack display="flex" flexDirection="row">
      <Box backgroundColor={'red'}>1</Box>
      <Box backgroundColor={'green'}>2</Box>
      <Box backgroundColor={'blue'}>3</Box>
    </Stack>
  );
};
