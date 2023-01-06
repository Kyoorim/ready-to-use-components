import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line prettier/prettier
import {
  border,
  BorderProps,
  color,
  ColorProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from 'styled-system';
import { FCC } from '../../types';

const SimpleGridBox = styled.div<CustomProps>`
  ${layout}
  ${space}
  ${grid}
  ${color}
  ${border}
  display: grid;
  grid-column-gap: ${(props) => `${props.spacingX}px`};
  grid-row-gap: ${(props) => `${props.spacingY}px`};
  grid-template-columns: ${(props) => `repeat(${props.column}, 1fr)`};
  box-sizing: border-box;
  min-width: 0;
`;

export interface CustomProps {
  column?: string | number;
  spacingX?: string | number;
  spacingY?: string | number;
  color?: string;
}

export type SimpleGridProps = CustomProps & LayoutProps & SpaceProps & GridProps & ColorProps & BorderProps;

export const SimpleGrid: FCC<SimpleGridProps> = ({ column, spacingX, spacingY, ...props }) => {
  // eslint-disable-next-line prettier/prettier
  return (
    <SimpleGridBox
      data-testid="simpleGrid-comp"
      column={column}
      spacingX={spacingX}
      spacingY={spacingY}
      {...props}
    ></SimpleGridBox>
  );
};

export default SimpleGrid;
