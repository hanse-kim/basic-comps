import { Border, CSSProperties, Size } from '../types';
import { parseBorder, parseColor, parseSize } from '../utils';

export type EffectStyleProps = {
  filter?: CSSProperties['filter'];
  backdropFilter?: CSSProperties['backdropFilter'];
  boxShadow?: CSSProperties['boxShadow'];
  opacity?: CSSProperties['opacity'];
  mixBlendMode?: CSSProperties['mixBlendMode'];
  backgroundBlendMode?: CSSProperties['backgroundBlendMode'];

  outline?: Border;
  outlineWidth?: Size;
  outlineStyle?: CSSProperties['outlineStyle'];
  outlineColor?: CSSProperties['outlineColor'];
};

export const effectStyles = (props: EffectStyleProps) => {
  const {
    filter,
    backdropFilter,
    boxShadow,
    opacity,
    mixBlendMode,
    backgroundBlendMode,
    outline,
    outlineColor,
    outlineStyle,
    outlineWidth,
  } = props;

  return {
    filter,
    backdropFilter,
    boxShadow,
    opacity,
    mixBlendMode,
    backgroundBlendMode,
    outline: parseBorder(outline),
    outlineWidth: parseSize(outlineWidth),
    outlineStyle,
    outlineColor: parseColor(outlineColor),
  };
};
