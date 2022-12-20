import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line prettier/prettier
import { flexbox, FlexboxProps, grid, GridProps, layout, LayoutProps } from 'styled-system';

const StackBox = styled.div`
  ${flexbox}
  ${grid}
  ${layout}
`;

export type StackProps = FlexboxProps & GridProps & LayoutProps;

const Stack: FCC<StackProps> = (props: any) => {
  return <StackBox {...props} data-testid="stack-comp"></StackBox>;
};

export default Stack;
