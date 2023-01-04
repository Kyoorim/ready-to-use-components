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
  border,
  position,
  shadow,
  BorderProps,
  PositionProps,
  ShadowProps,
} from 'styled-system';
import React from 'react';
import { FCC } from 'types';

const StyledBox = styled.div`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
  ${typography}
  ${border}
  ${position}
  ${shadow}
`;

// eslint-disable-next-line prettier/prettier
export type BoxProps = SpaceProps &
  LayoutProps &
  ColorProps &
  FlexboxProps &
  TypographyProps &
  BorderProps &
  PositionProps &
  ShadowProps;

export const Box: FCC<BoxProps> = (props: any) => {
  return <StyledBox {...props} data-testid={props['data-testid'] ? props['data-testid'] : 'box-comp'} />;
};

export default Box;
