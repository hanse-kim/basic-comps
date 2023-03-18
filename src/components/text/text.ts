import { CSSObject, styled } from 'src/core';
import { TextGroup } from './text-group';
import { TextProps } from './_types';

const createTextComponent = (props: TextProps): CSSObject[] => [
  defaultTextStyles,
  textStyles(props),
];

const defaultTextStyles: CSSObject = {
  margin: 0,
};

const textStyles = (options: TextProps): CSSObject => ({
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

export const Text = styled(TextGroup)(createTextComponent).withComponent('p');
