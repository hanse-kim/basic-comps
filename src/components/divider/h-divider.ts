import { CSSObject, parseColor, parseSize, styled } from 'src/core';
import { commonDividerStyles } from './_common';
import { DividerOptions, DividerProps } from './_types';

export const HDivider = styled.hr(createHorizontalDividerComponent);

function createHorizontalDividerComponent(props: DividerProps): CSSObject[] {
  return [commonDividerStyles, horizontalDividerStyles(props)];
}

function horizontalDividerStyles(options: DividerOptions): CSSObject {
  return {
    width: parseSize(options.length || '100%'),
    height: parseSize(options.thickness || 1),
    backgroundColor: parseColor(options.color || 'lightgrey'),
  };
}
