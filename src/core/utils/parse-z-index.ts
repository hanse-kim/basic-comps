import { zIndices } from '../constants';
import { ZIndex } from '../types';

export const parseZIndex = (zIndex?: ZIndex | false) => {
  if (zIndex === undefined || zIndex === false) {
    return undefined;
  }

  if (typeof zIndex === 'number') {
    return zIndex;
  }

  return zIndices[zIndex];
};
