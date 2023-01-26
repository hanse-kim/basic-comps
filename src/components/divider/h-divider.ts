import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';
import { parseColor, parseSize } from 'src/core/utils';
import { defaultDividerStyles } from './_common';
import { DividerOptions, DividerProps } from './_types';

const createHorizontalDividerComponent = (props: DividerProps) => [
  defaultDividerStyles,
  horizontalDividerStyles(props),
];

const horizontalDividerStyles = (options: DividerOptions): CSSObject => ({
  width: parseSize(options.length || '100%'),
  height: parseSize(options.thickness || 1),
  backgroundColor: parseColor(options.color || 'lightgrey'),
});

export const HDivider = styled.hr(createHorizontalDividerComponent);
