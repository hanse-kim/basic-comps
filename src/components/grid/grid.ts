import { CSSObject, gridStyles, styled } from 'src/core';
import { Box } from '../box';
import { GridProps } from './_types';

export const Grid = styled(Box)(createGridComponent);

function createGridComponent(props: GridProps): CSSObject[] {
  return [defaultGridStyles, gridStyles(props)];
}

const defaultGridStyles: CSSObject = {
  display: 'grid',
};
