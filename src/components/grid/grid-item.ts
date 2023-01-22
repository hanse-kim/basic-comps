import styled from '@emotion/styled';
import { GridItemStyleProps, gridItemStyles } from 'src/core/styles';
import { BoxProps, createBoxComponent } from '../box';

export type GridItemProps = BoxProps & GridItemStyleProps;

const createGridItemComponent = (props: GridItemProps) => [
  ...createBoxComponent(props),
  gridItemStyles(props),
];

export const GridItem = styled.div(createGridItemComponent);
