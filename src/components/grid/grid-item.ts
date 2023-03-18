import { CSSObject, gridItemStyles, styled } from 'src/core';
import { Box } from '../box';
import { GridItemProps } from './_types';

const createGridItemComponent = (props: GridItemProps): CSSObject[] => [
  gridItemStyles(props),
];

export const GridItem = styled(Box)(createGridItemComponent);
