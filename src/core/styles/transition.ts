import { CSSObject, CSSProperties } from '../types';

export type TransitionStyleProps = {
  transition?: CSSProperties['transition'];
  transitionDelay?: CSSProperties['transitionDelay'];
  transitionDuration?: CSSProperties['transitionDuration'];
  transitionProperty?: CSSProperties['transitionProperty'];
  transitionTimingFunction?: CSSProperties['transitionTimingFunction'];
};

export const transitionStyles = (props: TransitionStyleProps): CSSObject => {
  const {
    transition,
    transitionDelay,
    transitionDuration,
    transitionProperty,
    transitionTimingFunction,
  } = props;

  return {
    transition,
    transitionDelay,
    transitionDuration,
    transitionProperty,
    transitionTimingFunction,
  };
};
