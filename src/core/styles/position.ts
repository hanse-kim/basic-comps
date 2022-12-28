import { css } from '@emotion/react';
import { CSSProperties } from 'react';
import { Size, ZIndex } from '../types';
import { parseSize } from '../utils/parse-size';
import { parseZIndex } from '../utils/parse-z-index';

export type PositionProps = {
  position?: CSSProperties['position'];
  inset?: Size;
  insetX?: Size;
  insetY?: Size;
  left?: Size;
  top?: Size;
  right?: Size;
  bottom?: Size;
  zIndex?: ZIndex;
};

export const positionStyles = (props: PositionProps) => {
  const { position, inset, insetX, insetY, zIndex } = props;

  const left = props.left || insetX || inset;
  const right = props.right || insetX || inset;
  const top = props.top || insetY || inset;
  const bottom = props.bottom || insetY || inset;

  return css({
    position,
    zIndex: parseZIndex(zIndex),
    left: parseSize(left),
    right: parseSize(right),
    top: parseSize(top),
    bottom: parseSize(bottom),
  });
};
