import { CSSObject, parseColor, parseSize, styled } from 'src/core';
import { commonDividerStyles } from './_common';
import { DividerOptions, DividerProps } from './_types';

export const VDivider = styled.hr(createVerticalDividerComponent);

function createVerticalDividerComponent(props: DividerProps): CSSObject[] {
  return [commonDividerStyles, verticalDividerStyles(props)];
}

function verticalDividerStyles(options: DividerOptions): CSSObject {
  return {
    width: parseSize(options.thickness || 1),
    height: parseSize(options.length),
    backgroundColor: parseColor(options.color || 'lightgrey'),
  };
}
