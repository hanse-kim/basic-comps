import { CSSObject, parseColor, parseSize, styled } from 'src/core';
import { commonDividerStyles } from './_common';
import { DividerOptions, DividerProps } from './_types';

const createHorizontalDividerComponent = (props: DividerProps): CSSObject[] => [
  commonDividerStyles,
  horizontalDividerStyles(props),
];

const horizontalDividerStyles = (options: DividerOptions): CSSObject => ({
  width: parseSize(options.length || '100%'),
  height: parseSize(options.thickness || 1),
  backgroundColor: parseColor(options.color || 'lightgrey'),
});

export const HDivider = styled.hr(createHorizontalDividerComponent);
