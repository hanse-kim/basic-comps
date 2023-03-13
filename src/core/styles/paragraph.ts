import { CSSProperties, FontWeight, Size } from '../types';
import { parseColor, parseFontWeight, parseSize } from '../utils';

export type ParagraphStyleProps = {
  color?: CSSProperties['color'];
  fontColor?: CSSProperties['color'];
  fontSize?: Size;
  fontWeight?: FontWeight;
  fontFamily?: CSSProperties['fontFamily'];
  letterSpacing?: CSSProperties['letterSpacing'];
  textAlign?: CSSProperties['textAlign'];
  whiteSpace?: CSSProperties['whiteSpace'];
  wordBreak?: CSSProperties['wordBreak'];
  wordSpacing?: CSSProperties['wordSpacing'];
  lineHeight?: CSSProperties['lineHeight'];
  textShadow?: CSSProperties['textShadow'];
};

export const paragraphStyles = (props: ParagraphStyleProps) => {
  const {
    color,
    fontColor,
    fontSize,
    fontWeight,
    fontFamily,
    letterSpacing,
    textAlign,
    whiteSpace,
    wordBreak,
    wordSpacing,
    lineHeight,
    textShadow,
  } = props;

  return {
    color: parseColor(fontColor || color),
    fontSize: parseSize(fontSize),
    fontWeight: parseFontWeight(fontWeight),
    fontFamily,
    letterSpacing,
    textAlign,
    whiteSpace,
    wordBreak,
    wordSpacing,
    lineHeight,
    textShadow,
  };
};
