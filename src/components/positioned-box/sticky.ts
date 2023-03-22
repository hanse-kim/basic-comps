import { CSSObject, positionStyles, styled } from 'src/core';
import { Box } from '../box';
import { PositionedBoxProps } from './_types';

const createStickyComponent = (props: PositionedBoxProps): CSSObject[] => [
  defaultStickyStyles,
  positionStyles(props),
];

const defaultStickyStyles: CSSObject = {
  position: 'sticky',
};

export const Sticky = styled(Box)(createStickyComponent);
