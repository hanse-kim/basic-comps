import { Size } from 'src/core/types';
import { BoxProps } from '../box';

export type StackOptions = {
  spacing?: Size;
  reverse?: boolean;
};

export type StackProps = StackOptions & BoxProps;
