import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import Center from './Center';
import { BoxProps } from 'components/Box';

export default {
  title: 'Center',
  component: Center,
} as Meta<BoxProps>;

const styles = {
  backgroundColor: 'black',
  color: 'white',
};

export const Default: FC = () => {
  return <Center {...styles}>Center</Center>;
};
