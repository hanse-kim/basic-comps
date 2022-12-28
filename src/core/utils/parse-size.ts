import { baseFontSize as defaultBaseFontSize } from '../constants';
import { Size, SizeUnit } from '../types';

const sizeAliasMap: Record<string, string> = {
  px: '1px',
  full: '9999px',
};

type Options = {
  baseFontSize?: number;
  inputSizeUnit?: SizeUnit;
  outputSizeUnit?: SizeUnit;
};

export const parseSize = (
  size: Size,
  {
    baseFontSize = defaultBaseFontSize,
    inputSizeUnit = SizeUnit.Pixel,
    outputSizeUnit = SizeUnit.Rem,
  }: Options = {}
) => {
  if (typeof size === 'string') {
    return sizeAliasMap[size] || size;
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
