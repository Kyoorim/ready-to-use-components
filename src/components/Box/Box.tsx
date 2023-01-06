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
  position,
  shadow,
  BorderProps,
  PositionProps,
  ShadowProps,
  border,
} from 'styled-system';
import React from 'react';
import { FCC } from '../../types';

const StyledBox = styled.div`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
  ${typography}
  ${border}
  ${position}
  ${shadow}
  box-sizing:'border-box';
  min-width: 0;
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
