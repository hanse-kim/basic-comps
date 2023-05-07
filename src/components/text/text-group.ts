import { CSSObject, paragraphStyles, styled } from 'src/core';
import { Box } from '../box';
import { TextGroupProps } from './_types';

export const TextGroup = styled(Box)(createTextComponent);

function createTextComponent(props: TextGroupProps): CSSObject[] {
  return [paragraphStyles(props)];
}
