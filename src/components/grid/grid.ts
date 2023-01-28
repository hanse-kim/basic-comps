import styled, { CSSObject } from '@emotion/styled';
import { gridStyles } from 'src/core/styles';
import { createBoxComponent } from '../box';
import { GridProps } from './_types';

const createGridComponent = (props: GridProps): CSSObject[] => [
  ...createBoxComponent(props),
  defaultGridStyles,
  gridStyles(props),
];

const defaultGridStyles: CSSObject = {
  display: 'grid',
};

export const Grid = styled.div(createGridComponent);
