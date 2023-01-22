import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';
import { CSSProperties } from 'react';
import { FlexboxStyleProps, LayoutStyleProps } from 'src/core/styles';
import { Size } from 'src/core/types';
import { parseColor, parseSize } from 'src/core/utils';

type DividerOptions = {
  thickness?: Size;
  length?: Size;
  color?: CSSProperties['backgroundColor'];
};

export type DividerProps = DividerOptions &
  LayoutStyleProps &
  FlexboxStyleProps;

const createHorizontalDividerComponent = (props: DividerProps) => [
  defaultDividerStyles,
  horizontalDividerStyles(props),
];

const createVerticalDividerComponent = (props: DividerProps) => [
  defaultDividerStyles,
  verticalDividerStyles(props),
];

const defaultDividerStyles: CSSObject = {
  display: 'flex',
  flexShrink: 0,
  margin: 0,
  border: 'none',
};

const horizontalDividerStyles = (options: DividerOptions): CSSObject => ({
  width: parseSize(options.length || '100%'),
  height: parseSize(options.thickness || 1),
  backgroundColor: parseColor(options.color || 'lightgrey'),
});

const verticalDividerStyles = (options: DividerOptions): CSSObject => ({
  width: parseSize(options.thickness || 1),
  height: parseSize(options.length),
  backgroundColor: parseColor(options.color || 'lightgrey'),
});

export const HDivider = styled.hr(createHorizontalDividerComponent);
export const VDivider = styled.hr(createVerticalDividerComponent);
