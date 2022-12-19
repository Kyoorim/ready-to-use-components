import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import Stack, { StackProps } from './Stack';

const data = [
  { id: 1, text: 'one' },
  { id: 2, text: 'two' },
  { id: 3, text: 'three' },
];

export default {
  title: 'Stack',
  component: Stack,
} as Meta<StackProps>;

export const Default: FC = () => {
  return (
    <>
      {data.map((el) => (
        <Stack data-testid={el.id}>{el.text}</Stack>
      ))}
    </>
  );
};

export const OutlineBlack: FC = () => {
  return (
    <>
      {data.map((el) => (
        <Stack data-testid={el.id} width={1 / 3} border="1px solid black" borderRadius={10} textAlign="center">
          {el.text}
        </Stack>
      ))}
    </>
  );
};
