import { CSSObject, parseColor, parseSize, styled } from 'src/core';
import { commonDividerStyles } from './_common';
import { DividerOptions, DividerProps } from './_types';

const createVerticalDividerComponent = (props: DividerProps): CSSObject[] => [
  commonDividerStyles,
  verticalDividerStyles(props),
];

const verticalDividerStyles = (options: DividerOptions): CSSObject => ({
  width: parseSize(options.thickness || 1),
  height: parseSize(options.length),
  backgroundColor: parseColor(options.color || 'lightgrey'),
});

export const VDivider = styled.hr(createVerticalDividerComponent);
