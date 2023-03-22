import { Border, CSSObject, Size } from '../types';
import { parseBorder, parseSize } from '../utils';

export type BorderStyleProps = {
  border?: Border;
  borderTop?: Border;
  borderRight?: Border;
  borderBottom?: Border;
  borderLeft?: Border;
  borderRadius?: Size;
};

export const borderStyles = (props: BorderStyleProps): CSSObject => {
  const {
    border,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    borderRadius,
  } = props;

  return {
    border: parseBorder(border),
    borderTop: parseBorder(borderTop),
    borderRight: parseBorder(borderRight),
    borderBottom: parseBorder(borderBottom),
    borderLeft: parseBorder(borderLeft),
    borderRadius: parseSize(borderRadius),
  };
};
