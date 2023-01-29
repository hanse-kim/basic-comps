import { CSSObject, styled } from 'src/core';
import { createBoxComponent } from '../box';
import { TextOptions, TextProps } from './_types';

const createTextComponent = (props: TextProps): CSSObject[] => [
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
