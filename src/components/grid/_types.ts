import { GridItemStyleProps, GridStyleProps } from 'src/core/styles';
import { BoxProps } from '../box';

export type GridProps = BoxProps & GridStyleProps;
export type GridItemProps = BoxProps & GridItemStyleProps;
