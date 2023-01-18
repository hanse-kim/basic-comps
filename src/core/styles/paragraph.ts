import { css } from '@emotion/react';
import { CSSProperties } from 'react';
import { FontWeight, Size } from '../types';
import { parseColor, parseFontWeight, parseSize } from '../utils';

export type ParagraphProps = {
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

export const paragraphStyles = (props: ParagraphProps) => {
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

  return css({
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
  });
};

const linesStyles = (lines: number) => {
  return css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${lines};
  `;
};
