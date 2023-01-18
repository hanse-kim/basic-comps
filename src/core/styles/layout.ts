import { css } from '@emotion/react';
import { CSSProperties } from 'react';
import { Size } from '../types';
import { parseSize } from '../utils';

export type LayoutProps = {
  display?: CSSProperties['display'];

  size?: Size;
  minSize?: Size;
  maxSize?: Size;

  width?: Size;
  minWidth?: Size;
  maxWidth?: Size;

  height?: Size;
  minHeight?: Size;
  maxHeight?: Size;

  overflow?: CSSProperties['overflow'];
  overflowX?: CSSProperties['overflowX'];
  overflowY?: CSSProperties['overflowY'];
};

export const layoutStyles = (props: LayoutProps) => () => {
  const width = props.size || props.width;
  const height = props.size || props.height;
  const minWidth = props.minSize || props.minWidth;
  const maxWidth = props.maxSize || props.maxWidth;
  const minHeight = props.minSize || props.minHeight;
  const maxHeight = props.maxSize || props.maxHeight;

  const {
    display,
    overflow,
    overflowX,
    overflowY,
  } = props;

  return css({
    display,
    width: parseSize(width),
    height: parseSize(height),
    minWidth: parseSize(minWidth),
    maxWidth: parseSize(maxWidth),
    minHeight: parseSize(minHeight),
    maxHeight: parseSize(maxHeight),
    overflow,
    overflowX,
    overflowY,
  });
};
