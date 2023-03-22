import { CSSObject, CSSProperties, Keyframes } from '../types';

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

export const animationStyles = (props: AnimationStyleProps): CSSObject => {
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
