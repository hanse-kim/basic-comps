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
  const {
    gridTemplate,
    gridTemplateAreas,
    girdTemplateColumns,
    gridTemplateRows,
    girdAutoColumns,
    gridAutoRows,
    gridAutoFlow,
    gridGap,
    gridColumnGap,
    gridRowGap,
  } = props;

  return css({
    gridTemplate,
    gridTemplateAreas,
    girdTemplateColumns,
    gridTemplateRows,
    girdAutoColumns,
    gridAutoRows,
    gridAutoFlow,
    gridGap: parseSize(gridGap),
    gridColumnGap: parseSize(gridColumnGap),
    gridRowGap: parseSize(gridRowGap),
  });
};
