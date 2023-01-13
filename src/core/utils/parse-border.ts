import { Border } from '../types';
import { parseColor } from './parse-color';
import { parseSize } from './parse-size';

export function parseBorder(border?: Border | false) {
  if (typeof border === 'undefined' || border === false) {
    return undefined;
  }

  if (typeof border === 'string') {
    return border;
  }

  const [borderWidth, borderStyle, borderColor] = border;
  return `${parseSize(borderWidth)} ${borderStyle} ${parseColor(borderColor)}`;
}
