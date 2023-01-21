import { CSSProperties } from 'react';
import { Size, ZIndex } from '../types';
import { getDefined, parseSize, parseZIndex } from '../utils';

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

  const left = getDefined(props.left, insetX, inset);
  const right = getDefined(props.right, insetX, inset);
  const top = getDefined(props.top, insetY, inset);
  const bottom = getDefined(props.bottom, insetY, inset);

  return {
    position,
    zIndex: parseZIndex(zIndex),
    left: parseSize(left),
    right: parseSize(right),
    top: parseSize(top),
    bottom: parseSize(bottom),
  };
};
