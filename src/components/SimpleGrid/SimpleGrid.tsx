import React from 'react';
import styled from 'styled-components';
import { grid, GridProps, layout, LayoutProps, space, SpaceProps } from 'styled-system';

const SimpleGridBox = styled.div<CustomProps>`
  ${layout}
  ${space}
  ${grid}
  display: grid;
  grid-column-gap: ${(props) => `${props.spacingX}px`};
  grid-row-gap: ${(props) => `${props.spacingY}px`};
  grid-template-columns: ${(props) => `repeat(${props.column}, 1fr)`};
`;

export interface CustomProps {
  column: number;
  spacingX?: string | number;
  spacingY?: string | number;
}

export type SimpleGridProps = CustomProps & LayoutProps & SpaceProps & GridProps;

const SimpleGrid: FCC<SimpleGridProps> = ({ column, spacingX, spacingY, ...props }) => {
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
