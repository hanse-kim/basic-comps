import { Border, Size } from '../types';
import { parseSize } from '../utils';
import { parseBorder } from '../utils/parse-border';

export type BorderProps = {
  border?: Border;
  borderTop?: Border;
  borderRight?: Border;
  borderBottom?: Border;
  borderLeft?: Border;
  borderRadius?: Size;
};

export const borderStyles = (props: BorderProps) => {
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
