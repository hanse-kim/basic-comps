import { Colors } from '../types';
import { getValueByFlattedKey } from './_common';

export function parseColor(color?: string | false, colors?: Colors) {
  if (color === undefined || color === false ) {
    return undefined;
  }

  if (color.startsWith('#') || color.startsWith('rgb') || !colors) {
    return color;
  }

  return getValueByFlattedKey(color, colors) || color;
}
