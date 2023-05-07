import { CSSObject, positionStyles, styled } from 'src/core';
import { Box } from '../box';
import { PositionedBoxProps } from './_types';

export const Sticky = styled(Box)(createStickyComponent);

function createStickyComponent(props: PositionedBoxProps): CSSObject[] {
  return [defaultStickyStyles, positionStyles(props)];
}

const defaultStickyStyles: CSSObject = {
  position: 'sticky',
};
