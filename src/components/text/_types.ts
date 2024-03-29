import { ParagraphStyleProps } from 'src/core';
import { BoxProps } from '../box';

export type TextGroupProps = BoxProps & ParagraphStyleProps;

type TextOptions = {
  lineThrough?: boolean;
  underline?: boolean;
  ellipsisLines?: number;
};

export type TextProps = TextGroupProps & TextOptions;
