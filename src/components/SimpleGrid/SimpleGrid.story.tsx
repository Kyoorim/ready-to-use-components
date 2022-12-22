import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import SimpleGrid, { SimpleGridProps } from './SimpleGrid';
import Box from '../Box/Box';

export default {
  title: 'SimpleGrid',
  component: SimpleGrid,
} as Meta<SimpleGridProps>;

export const Default: FC = () => {
  return (
    <SimpleGrid>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
      <Box>4</Box>
      <Box>5</Box>
      <Box>6</Box>
    </SimpleGrid>
  );
};
