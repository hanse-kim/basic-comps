import { css } from '@emotion/react';
import { CSSProperties } from 'react';
import { Size } from '../types';
import { parseSize } from '../utils';

export type GridProps = {
  gridTemplate?: CSSProperties['gridTemplate'];
  gridTemplateAreas?: CSSProperties['gridTemplateAreas'];
  girdTemplateColumns?: CSSProperties['gridTemplateColumns'];
  gridTemplateRows?: CSSProperties['gridTemplateRows'];

  girdAutoColumns?: CSSProperties['gridAutoColumns'];
  gridAutoRows?: CSSProperties['gridAutoRows'];
  gridAutoFlow?: CSSProperties['gridAutoFlow'];

  gridGap?: Size;
  gridColumnGap?: Size;
  gridRowGap?: Size;
};

export const gridStyles = (props: GridProps) => {
  const { gridGap, gridColumnGap, gridRowGap } = props;

  return css({
    ...props,
    gridGap: parseSize(gridGap),
    gridColumnGap: parseSize(gridColumnGap),
    gridRowGap: parseSize(gridRowGap),
  });
};
