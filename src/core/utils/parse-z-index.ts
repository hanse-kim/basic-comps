import { zIndices } from '../constants';
import { ZIndex } from '../types';

export const parseZIndex = (zIndex?: ZIndex) => {
  if (zIndex === undefined) {
    return zIndex;
  }

  if (typeof zIndex === 'number') {
    return zIndex;
  }

  return zIndices[zIndex];
};
