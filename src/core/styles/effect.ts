import { CSSProperties } from '../types';

export type EffectStyleProps = {
  filter?: CSSProperties['filter'];
  backdropFilter?: CSSProperties['backdropFilter'];
  boxShadow?: CSSProperties['boxShadow'];
  opacity?: CSSProperties['opacity'];
  mixBlendMode?: CSSProperties['mixBlendMode'];
  backgroundBlendMode?: CSSProperties['backgroundBlendMode'];
};

export const effectStyles = (props: EffectStyleProps) => {
  const {
    filter,
    backdropFilter,
    boxShadow,
    opacity,
    mixBlendMode,
    backgroundBlendMode,
  } = props;

  return {
    filter,
    backdropFilter,
    boxShadow,
    opacity,
    mixBlendMode,
    backgroundBlendMode,
  };
};
