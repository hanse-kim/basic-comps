import { CSSObject } from '@emotion/react';
import { CSSProperties } from 'react';
import { FontWeight, Size } from '../types';
import { parseColor, parseFontWeight, parseSize } from '../utils';

export type ParagraphStyleProps = {
  color?: CSSProperties['color'];
  fontColor?: CSSProperties['color'];
  fontSize?: Size;
  fontWeight?: FontWeight;
  letterSpacing?: CSSProperties['letterSpacing'];
  textAlign?: CSSProperties['textAlign'];
  whiteSpace?: CSSProperties['whiteSpace'];
  wordBreak?: CSSProperties['wordBreak'];
  wordSpacing?: CSSProperties['wordSpacing'];
  lineHeight?: CSSProperties['lineHeight'];
  textShadow?: CSSProperties['textShadow'];

  lineThrough?: boolean;
  underline?: boolean;
  lines?: number;
};

export const paragraphStyles = (props: ParagraphStyleProps) => {
  const {
    color,
    fontColor,
    fontSize,
    fontWeight,
    letterSpacing,
    textAlign,
    whiteSpace,
    wordBreak,
    wordSpacing,
    lineHeight,
    textShadow,
    lineThrough,
    underline,
    lines,
  } = props;

  return {
    color: parseColor(fontColor || color),
    fontSize: parseSize(fontSize),
    fontWeight: parseFontWeight(fontWeight),
    letterSpacing,
    textAlign,
    whiteSpace,
    wordBreak,
    wordSpacing,
    lineHeight,
    textShadow,
    textDecoration: lineThrough
      ? 'line-through'
      : underline
      ? 'underline'
      : undefined,
    ...(lines && linesStyles(lines)),
  };
};

const linesStyles = (lines: number): CSSObject => ({
  WebkitLineClamp: lines,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});
