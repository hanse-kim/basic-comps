import { Size } from 'src/core';
import { BoxProps } from '../box';

type StackOptions = {
  /** It sets the spacing of items aligned on main axis. */
  spacing?: Size;

  /** It sets the spacing of items aligned on cross axis. */
  crossSpacing?: Size;

  /** It specifies the stack direction is reversed. */
  reversed?: boolean;
};

export type StackProps = StackOptions & BoxProps;
