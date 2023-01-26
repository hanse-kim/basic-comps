import { CSSProperties } from 'react';
import { FlexboxStyleProps, LayoutStyleProps } from 'src/core/styles';
import { Size } from 'src/core/types';

export type DividerOptions = {
  thickness?: Size;
  length?: Size;
  color?: CSSProperties['backgroundColor'];
};

export type DividerProps = DividerOptions &
  LayoutStyleProps &
  FlexboxStyleProps;
