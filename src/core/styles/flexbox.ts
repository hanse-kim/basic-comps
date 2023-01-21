import { CSSProperties } from 'react';
import { Size } from '../types';
import { parseSize } from '../utils';

export type FlexboxProps = {
  order?: CSSProperties['order'];

  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];

  flexFlow?: CSSProperties['flexFlow'];
  flexWrap?: CSSProperties['flexWrap'];
  flexDirection?: CSSProperties['flexDirection'];

  flex?: CSSProperties['flex'];
  flexGrow?: CSSProperties['flexGrow'];
  flexShrink?: CSSProperties['flexShrink'];
  flexBasis?: CSSProperties['flexBasis'];

  gap?: Size;
  rowGap?: Size;
  columnGap?: Size;
};

export const flexboxStyles = (props: FlexboxProps) => {
  const {
    order,
    justifyContent,
    alignItems,
    flexFlow,
    flexWrap,
    flexDirection,
    flex,
    flexGrow,
    flexShrink,
    flexBasis,
    gap,
    rowGap,
    columnGap,
  } = props;

  return {
    order,
    justifyContent,
    alignItems,
    flexFlow,
    flexWrap,
    flexDirection,
    flex,
    flexGrow,
    flexShrink,
    flexBasis,
    gap: parseSize(gap),
    rowGap: parseSize(rowGap),
    columnGap: parseSize(columnGap),
  };
};
