import { CSSObject, positionStyles, styled } from 'src/core';
import { createBoxComponent } from './box';
import { PositionedBoxProps } from './_types';

const createStickyComponent = (props: PositionedBoxProps): CSSObject[] => [
  ...createBoxComponent(props),
  defaultStickyStyles,
  positionStyles(props),
];

const defaultStickyStyles: CSSObject = {
  position: 'sticky',
};

export const Sticky = styled.div(createStickyComponent);
