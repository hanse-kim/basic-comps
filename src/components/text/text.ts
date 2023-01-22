import styled, { CSSObject } from '@emotion/styled';
import { BoxProps, createBoxComponent } from '../box';

type TextOptions = {
  lineThrough?: boolean;
  underline?: boolean;
  lines?: number;
};

export type TextProps = TextOptions & BoxProps;

const createTextComponent = (props: TextProps) => [
  ...createBoxComponent(props),
  textStyles(props),
];

const textStyles = (options: TextOptions): CSSObject => ({
  textDecoration: options.lineThrough
    ? 'line-through'
    : options.underline
    ? 'underline'
    : undefined,
  ...(options.lines && linesStyles(options.lines)),
});

const linesStyles = (lines: number): CSSObject => ({
  WebkitLineClamp: lines,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});

export const Text = styled.p(createTextComponent);
