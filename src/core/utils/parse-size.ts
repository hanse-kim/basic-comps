import { baseFontSize as defaultBaseFontSize } from '../constants';
import { Size, SizeUnit } from '../types';

const sizeAliasMap = {
  px: '1px',
  full: '9999px',
} as const;

export type SizeAlias = keyof typeof sizeAliasMap;

export type ParseSizeOptions = {
  baseFontSize?: number;
  inputSizeUnit?: SizeUnit;
  outputSizeUnit?: SizeUnit;
};

export function parseSize(size: Size, options?: ParseSizeOptions): string;
export function parseSize(
  size?: Size | false,
  options?: ParseSizeOptions
): undefined;

export function parseSize(
  size?: Size | false,
  {
    baseFontSize = defaultBaseFontSize,
    inputSizeUnit = 'px',
    outputSizeUnit = 'rem',
  }: ParseSizeOptions = {}
) {
  if (size === undefined || size === false) {
    return undefined;
  }

  if (typeof size === 'string') {
    return isSizeAlias(size) ? sizeAliasMap[size] : size;
  }

  let sizeValue = size;

  if (inputSizeUnit === 'px' && outputSizeUnit === 'rem') {
    sizeValue = size / baseFontSize;
  }

  if (inputSizeUnit === 'rem' && outputSizeUnit === 'px') {
    sizeValue = size * baseFontSize;
  }

  return `${sizeValue}${outputSizeUnit}`;
}

function isSizeAlias(size: string): size is SizeAlias {
  return size in sizeAliasMap;
}
