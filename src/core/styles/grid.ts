import { CSSProperties, Size } from '../types';
import { parseSize } from '../utils';

export type GridStyleProps = {
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

export const gridStyles = (props: GridStyleProps) => {
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

  return {
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
  };
};
