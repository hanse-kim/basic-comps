import { CSSObject, styled } from 'src/core';
import { TextProps } from './_types';
import { TextGroup } from './text-group';

export const Text = styled(TextGroup)(createTextComponent).withComponent('p');

function createTextComponent(props: TextProps): CSSObject[] {
  return [defaultTextStyles, textStyles(props)];
}

const defaultTextStyles: CSSObject = {
  margin: 0,
};

function textStyles(options: TextProps): CSSObject {
  return {
    textDecoration: options.lineThrough
      ? 'line-through'
      : options.underline
      ? 'underline'
      : undefined,
    ...(options.lines && linesStyles(options.lines)),
  };
}

function linesStyles(lines: number): CSSObject {
  return {
    WebkitLineClamp: lines,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
  };
}
