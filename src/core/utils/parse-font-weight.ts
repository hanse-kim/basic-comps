import { fontWeights } from '../constants';
import { FontWeight } from '../types';

export const parseFontWeight = (fontWeight?: FontWeight) => {
  if (fontWeight === undefined) {
    return fontWeight
  }

  if (typeof fontWeight === 'number') {
    return fontWeight;
  }

  return fontWeights[fontWeight];
};
