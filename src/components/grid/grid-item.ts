import styled from '@emotion/styled';
import { gridItemStyles } from 'src/core/styles';
import { createBoxComponent } from '../box';
import { GridItemProps } from './_types';

const createGridItemComponent = (props: GridItemProps) => [
  ...createBoxComponent(props),
  gridItemStyles(props),
];

export const GridItem = styled.div(createGridItemComponent);
