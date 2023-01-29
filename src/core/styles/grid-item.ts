import { CSSProperties } from '../types';

export type GridItemStyleProps = {
  gridArea?: CSSProperties['gridArea'];

  gridRow?: CSSProperties['gridRow'];
  gridRowStart?: CSSProperties['gridRowStart'];
  gridRowEnd?: CSSProperties['gridRowEnd'];

  gridColumn?: CSSProperties['gridColumn'];
  gridColumnStart?: CSSProperties['gridColumnStart'];
  gridColumnEnd?: CSSProperties['gridColumnEnd'];
};

export const gridItemStyles = (props: GridItemStyleProps) => {
  const {
    gridArea,
    gridRow,
    gridRowStart,
    gridRowEnd,
    gridColumn,
    gridColumnStart,
    gridColumnEnd,
  } = props;

  return {
    gridArea,
    gridRow,
    gridRowStart,
    gridRowEnd,
    gridColumn,
    gridColumnStart,
    gridColumnEnd,
  };
};
