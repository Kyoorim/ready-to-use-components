import styled from 'styled-components';
import {
  space,
  layout,
  color,
  flexbox,
  SpaceProps,
  LayoutProps,
  ColorProps,
  FlexboxProps,
  typography,
  TypographyProps,
} from 'styled-system';
import React from 'react';

const StyledBox = styled.div`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
  ${typography}
`;

export type BoxProps = SpaceProps & LayoutProps & ColorProps & FlexboxProps & TypographyProps;

const Box: FCC<BoxProps> = (props: any) => {
  return <StyledBox {...props} data-testid={props['data-testid'] ? props['data-testid'] : 'box-comp'} />;
};

export default Box;
