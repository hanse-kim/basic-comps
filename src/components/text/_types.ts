import { BoxProps } from '../box';

export type TextOptions = {
  lineThrough?: boolean;
  underline?: boolean;
  lines?: number;
};

export type TextProps = TextOptions & BoxProps;
