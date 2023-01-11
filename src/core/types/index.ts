import { fontWeights, zIndices } from '../constants';
import { SizeAlias } from '../utils/parse-size';

export type UnionString<T> = T | (string & {});
export type RecursiveObject<T> = {
  [key: string]: T | RecursiveObject<T> | undefined;
};
export type Primitive = string | number | boolean | symbol | bigint | undefined;

export type Size = number | UnionString<SizeAlias>;
export type SizeUnit = 'px' | 'rem';

export type Space =
  | Size
  | [topAndBottom: Size, leftAndRight: Size]
  | [top: Size, leftAndRight: Size, bottom: Size]
  | [top: Size, right: Size, bottom: Size, left: Size];

export type FontWeight = keyof typeof fontWeights | number;
export type ZIndex = keyof typeof zIndices | number;

export type Colors = RecursiveObject<string>;
