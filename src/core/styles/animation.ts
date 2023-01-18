import { css, Keyframes } from '@emotion/react';
import { CSSProperties } from 'react';

export type AnimationProps = {
  animation?: CSSProperties['animation'];
  animationDuration?: CSSProperties['animationDuration'];
  animationDelay?: CSSProperties['animationDelay'];
  animationName?: CSSProperties['animationName'] | Keyframes;
  animationFillMode?: CSSProperties['animationFillMode'];
  animationIterationCount?: CSSProperties['animationIterationCount'];
  animationPlayState?: CSSProperties['animationPlayState'];
  animationTimingFunction?: CSSProperties['animationTimingFunction'];
};

export const animationStyles = (props: AnimationProps) => {
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

  return css({
    animation,
    animationDuration,
    animationDelay,
    animationName,
    animationFillMode,
    animationIterationCount,
    animationPlayState,
    animationTimingFunction,
  });
};
