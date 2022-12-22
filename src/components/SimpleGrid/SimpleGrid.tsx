import React from 'react';
import styled from 'styled-components';
import { flexbox, FlexboxProps, grid, GridProps, layout, LayoutProps, space, SpaceProps } from 'styled-system';

const SimpleGridBox = styled.div<CustomProps>`
  ${layout}
  ${space}
  ${flexbox}
  ${grid}
  display: grid;
  grid-column-gap: ${(props) => `${props.spacingX}px`};
  grid-row-gap: ${(props) => `${props.spacingY}px`};
  grid-template-columns: ${(props) => `repeat(${props.column}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.row}, 1fr)`};
`;

export interface CustomProps {
  column?: number;
  row?: number;
  spacingX?: string | number;
  spacingY?: string | number;
}

export type SimpleGridProps = CustomProps & LayoutProps & SpaceProps & FlexboxProps & GridProps;

const SimpleGrid: FCC<SimpleGridProps> = ({ column = 3, row = 3, spacingX = '20px', spacingY = '20px', ...props }) => {
  return (
    <SimpleGridBox
      data-testid="simpleGrid-comp"
      column={column}
      row={row}
      spacingX={spacingX}
      spacingY={spacingY}
      {...props}
    ></SimpleGridBox>
  );
};

export default SimpleGrid;
