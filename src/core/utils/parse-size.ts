import { baseFontSize as defaultBaseFontSize } from '../constants';
import { Size, SizeUnit } from '../types';

const sizeAliasMap = {
  px: '1px',
  full: '9999px',
} as const;

export type SizeAlias = keyof typeof sizeAliasMap;

type Options = {
  baseFontSize?: number;
  inputSizeUnit?: SizeUnit;
  outputSizeUnit?: SizeUnit;
};

export const parseSize = (
  size?: Size,
  {
    baseFontSize = defaultBaseFontSize,
    inputSizeUnit = SizeUnit.Pixel,
    outputSizeUnit = SizeUnit.Rem,
  }: Options = {}
) => {
  if (size === undefined) {
    return size;
  }

  if (typeof size === 'string') {
    return isSizeAlias(size) ? sizeAliasMap[size] : size;
  }

  let sizeValue = size;

  if (inputSizeUnit === SizeUnit.Pixel && outputSizeUnit === SizeUnit.Rem) {
    sizeValue = size / baseFontSize;
  }

  if (inputSizeUnit === SizeUnit.Rem && outputSizeUnit === SizeUnit.Pixel) {
    sizeValue = size * baseFontSize;
  }

  return `${sizeValue}${outputSizeUnit}`;
};

const isSizeAlias = (size: string): size is SizeAlias => {
  return size in sizeAliasMap;
};
