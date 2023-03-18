import { CSSObject, paragraphStyles, styled } from 'src/core';
import { Box } from '../box';
import { TextProps } from './_types';

const createTextComponent = (props: TextProps): CSSObject[] => [
  paragraphStyles(props),
];

export const TextGroup = styled(Box)(createTextComponent);
