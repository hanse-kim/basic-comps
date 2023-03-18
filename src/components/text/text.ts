import { CSSObject, styled } from 'src/core';
import { Box } from '../box';
import { TextOptions, TextProps } from './_types';

const createTextComponent = (props: TextProps): CSSObject[] => [
  defaultTextStyles,
  textStyles(props),
];

const defaultTextStyles: CSSObject = {
  margin: 0,
};

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

export const Text = styled(Box)(createTextComponent).withComponent('p');
