import { css } from '@emotion/react';
import { CSSProperties } from 'react';
import { Size } from '../types';
import { parseColor } from '../utils/parse-color';
import { parseSize } from '../utils/parse-size';

export type BackgroundProps = {
  background?: CSSProperties['background'];
  backgroundColor?: CSSProperties['backgroundColor'];
  backgroundClip?: CSSProperties['backgroundClip'];
  backgroundImage?: CSSProperties['backgroundImage'];
  backgroundOrigin?: CSSProperties['backgroundOrigin'];
  backgroundRepeat?: CSSProperties['backgroundRepeat'];
  backgroundSize?: Size | CSSProperties['backgroundSize'];
  backgroundPosition?: CSSProperties['backgroundPosition'];
  backgroundPositionX?: CSSProperties['backgroundPositionX'];
  backgroundPositionY?: CSSProperties['backgroundPositionY'];
};

export const backgroundStyles = (props: BackgroundProps) => {
  const { backgroundColor, backgroundSize } = props;
  return css({
    ...props,
    backgroundColor: parseColor(backgroundColor),
    backgroundSize: parseSize(backgroundSize),
  });
};
