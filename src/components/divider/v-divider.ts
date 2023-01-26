import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';
import { parseColor, parseSize } from 'src/core/utils';
import { defaultDividerStyles } from './_common';
import { DividerOptions, DividerProps } from './_types';

const createVerticalDividerComponent = (props: DividerProps) => [
  defaultDividerStyles,
  verticalDividerStyles(props),
];

const verticalDividerStyles = (options: DividerOptions): CSSObject => ({
  width: parseSize(options.thickness || 1),
  height: parseSize(options.length),
  backgroundColor: parseColor(options.color || 'lightgrey'),
});

export const VDivider = styled.hr(createVerticalDividerComponent);
