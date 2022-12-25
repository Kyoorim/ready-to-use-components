import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line prettier/prettier
import { flexbox, FlexboxProps, grid, GridProps, layout, LayoutProps } from 'styled-system';

const StackBox = styled.div<CustomProps>`
  ${flexbox}
  ${grid}
  ${layout}
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.gap};
`;

export interface CustomProps {
  direction?: string;
  gap?: string;
}

export type StackProps = CustomProps & FlexboxProps & GridProps & LayoutProps;

export const Stack: FCC<StackProps> = ({ direction = 'column', gap = '10px', ...props }) => {
  return <StackBox data-testid="stack-comp" direction={direction} gap={gap} {...props}></StackBox>;
};

export default Stack;
