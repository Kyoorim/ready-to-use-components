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
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

const StackBox = styled.div`
  ${flexbox}
`;

const StackContent = styled.div`
  ${space}
  ${layout}
  ${color}
  ${border}
  ${typography}
`;

export type StackProps = FlexboxProps & SpaceProps & LayoutProps & ColorProps & BorderProps & TypographyProps;

const Stack: FCC<StackProps> = (props: any) => {
  return (
    <StackBox {...props} data-testid="stackbox-comp">
      <StackContent {...props} data-testid="stackcontent-comp"></StackContent>
    </StackBox>
  );
};

export default Stack;
