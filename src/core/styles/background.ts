import { CSSObject, CSSProperties, Size } from '../types';
import { parseColor, parseSize } from '../utils';

export type BackgroundStyleProps = {
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

export const backgroundStyles = (props: BackgroundStyleProps): CSSObject => {
  const {
    background,
    backgroundColor,
    backgroundClip,
    backgroundImage,
    backgroundOrigin,
    backgroundRepeat,
    backgroundSize,
    backgroundPosition,
    backgroundPositionX,
    backgroundPositionY,
  } = props;

  return {
    background,
    backgroundColor: parseColor(backgroundColor),
    backgroundClip,
    backgroundImage,
    backgroundOrigin,
    backgroundRepeat,
    backgroundSize: parseSize(backgroundSize),
    backgroundPosition,
    backgroundPositionX,
    backgroundPositionY,
  };
};
