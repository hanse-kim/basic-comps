import { fontWeights, zIndices } from '../constants';

export type Size = number | string;
export enum SizeUnit {
  Pixel = 'px',
  Rem = 'rem',
}

export type FontWeight = keyof typeof fontWeights | number;
export type ZIndex = keyof typeof zIndices | number;
