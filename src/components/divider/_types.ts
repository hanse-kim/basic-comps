import {
  CSSProperties,
  FlexboxStyleProps,
  LayoutStyleProps,
  Size,
} from 'src/core';

export type DividerOptions = {
  thickness?: Size;
  length?: Size;
  color?: CSSProperties['backgroundColor'];
};

export type DividerProps = DividerOptions &
  LayoutStyleProps &
  FlexboxStyleProps;
