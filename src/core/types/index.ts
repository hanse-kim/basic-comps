import { fontWeights, zIndices } from '../constants';
import { SizeAlias } from '../utils/parse-size';

type UnionString<T> = T | (string & {});

export type Size = number | UnionString<SizeAlias>;
export enum SizeUnit {
  Pixel = 'px',
  Rem = 'rem',
}

export type Space =
  | Size
  | [Size, Size]
  | [Size, Size, Size]
  | [Size, Size, Size, Size];

export type FontWeight = keyof typeof fontWeights | number;
export type ZIndex = keyof typeof zIndices | number;
