import { CSSObject, gridItemStyles, styled } from 'src/core';
import { Box } from '../box';
import { GridItemProps } from './_types';

export const GridItem = styled(Box)(createGridItemComponent);

function createGridItemComponent(props: GridItemProps): CSSObject[] {
  return [gridItemStyles(props)];
}
