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
  | [topAndBottom: Size, leftAndRight: Size]
  | [top: Size, leftAndRight: Size, bottom: Size]
  | [top: Size, right: Size, bottom: Size, left: Size];

export type FontWeight = keyof typeof fontWeights | number;
export type ZIndex = keyof typeof zIndices | number;
