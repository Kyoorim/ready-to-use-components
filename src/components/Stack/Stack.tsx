import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line prettier/prettier
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from 'styled-system';
import { FCC } from '../../types';

const StackBox = styled.div<CustomProps>`
  ${flexbox}
  ${grid}
  ${layout}
  ${space}
  ${border}
  ${color}
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.gap};
  box-sizing: border-box;
  min-width: 0;
`;

export interface CustomProps {
  direction?: string;
  gap?: string | number;
  color?: string;
}

export type StackProps = CustomProps & FlexboxProps & GridProps & LayoutProps & SpaceProps & BorderProps & ColorProps;

export const Stack: FCC<StackProps> = ({ direction = 'column', gap, ...props }) => {
  return <StackBox data-testid="stack-comp" direction={direction} gap={gap} {...props}></StackBox>;
};

export default Stack;
