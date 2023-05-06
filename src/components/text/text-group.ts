import { CSSObject, paragraphStyles, styled } from 'src/core';
import { Box } from '../box';
import { TextGroupProps } from './_types';

const createTextComponent = (props: TextGroupProps): CSSObject[] => [
  paragraphStyles(props),
];

export const TextGroup = styled(Box)(createTextComponent);
