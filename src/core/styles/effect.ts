import { css } from '@emotion/react';
import { CSSProperties } from 'react';

export type EffectProps = {
  filter?: CSSProperties['filter'];
  backdropFilter?: CSSProperties['backdropFilter'];
  boxShadow?: CSSProperties['boxShadow'];
  opacity?: CSSProperties['opacity'];
  mixBlendMode?: CSSProperties['mixBlendMode'];
  backgroundBlendMode?: CSSProperties['backgroundBlendMode'];
};

export const effectStyles = (props: EffectProps) => {
  const {
    filter,
    backdropFilter,
    boxShadow,
    opacity,
    mixBlendMode,
    backgroundBlendMode,
  } = props;

  return css({
    filter,
    backdropFilter,
    boxShadow,
    opacity,
    mixBlendMode,
    backgroundBlendMode,
  });
};
