import { CSSObject, gridStyles, styled } from 'src/core';
import { Box } from '../box';
import { GridProps } from './_types';

const createGridComponent = (props: GridProps): CSSObject[] => [
  defaultGridStyles,
  gridStyles(props),
];

const defaultGridStyles: CSSObject = {
  display: 'grid',
};

export const Grid = styled(Box)(createGridComponent);
