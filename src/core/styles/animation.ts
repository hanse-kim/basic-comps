import { Keyframes } from '@emotion/react';
import { CSSProperties } from 'react';

export type AnimationStyleProps = {
  animation?: CSSProperties['animation'];
  animationDuration?: CSSProperties['animationDuration'];
  animationDelay?: CSSProperties['animationDelay'];
  animationName?: CSSProperties['animationName'] | Keyframes;
  animationFillMode?: CSSProperties['animationFillMode'];
  animationIterationCount?: CSSProperties['animationIterationCount'];
  animationPlayState?: CSSProperties['animationPlayState'];
  animationTimingFunction?: CSSProperties['animationTimingFunction'];
};

export const animationStyles = (props: AnimationStyleProps) => {
  const {
    animation,
    animationDuration,
    animationDelay,
    animationName,
    animationFillMode,
    animationIterationCount,
    animationPlayState,
    animationTimingFunction,
  } = props;

  return {
    animation,
    animationDuration,
    animationDelay,
    animationName,
    animationFillMode,
    animationIterationCount,
    animationPlayState,
    animationTimingFunction,
  };
};
