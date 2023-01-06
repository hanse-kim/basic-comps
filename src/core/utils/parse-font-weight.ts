import { fontWeights } from '../constants';
import { FontWeight } from '../types';

export function parseFontWeight(fontWeight?: FontWeight | false) {
  if (fontWeight === undefined || fontWeight === false) {
    return undefined;
  }

  if (typeof fontWeight === 'number') {
    return fontWeight;
  }

  return fontWeights[fontWeight];
}
