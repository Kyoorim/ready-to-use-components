import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import Center from './Center';
import { BoxProps } from 'components/Box';

export default {
  title: 'Center',
  component: Center,
} as Meta<BoxProps>;

export const Default: FC = () => {
  return <Center>Center</Center>;
};
