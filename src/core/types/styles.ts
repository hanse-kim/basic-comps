import { CSSProperties } from '@emotion/serialize';
import { fontWeights, sizeAliasMap, zIndices } from '../constants';
import { RecursiveObject, UnionString } from './common';

export type SizeAlias = keyof typeof sizeAliasMap;
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

export type Border = string | [Size, CSSProperties['borderStyle'], string];
