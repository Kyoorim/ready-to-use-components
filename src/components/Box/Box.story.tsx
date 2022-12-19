import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import Box, { BoxProps } from './Box';

export default {
  title: 'Box',
  component: Box,
} as Meta<BoxProps>;

// title: 컴포넌트 이름. '/'를 넣어 카테고리화 가능
// component: 어떤 컴포넌트를 가져와서 스토리를 만들 것인지 명시

export const Default: FC = () => {
  return <Box>hello world</Box>;
};
