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
`;

export interface CustomProps {
  direction?: string;
}

export type StackProps = CustomProps & FlexboxProps & GridProps & LayoutProps;

const Stack: FCC<StackProps> = ({ direction = 'column', ...props }) => {
  return <StackBox data-testid="stack-comp" direction={direction} {...props}></StackBox>;
};

export default Stack;
