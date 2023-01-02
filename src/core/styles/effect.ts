import { css } from '@emotion/react';
import { CSSProperties } from 'react';

export type EffectProps = {
  filter?: CSSProperties['filter'];
  boxShadow?: CSSProperties['boxShadow'];
  opacity?: CSSProperties['opacity'];
  mixBlendMode?: CSSProperties['mixBlendMode'];
  backgroundBlendMode?: CSSProperties['backgroundBlendMode'];
};

export const effectStyles = (props: EffectProps) => {
  return css(props);
};
