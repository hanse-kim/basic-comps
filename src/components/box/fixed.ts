import { CSSObject, positionStyles, styled } from 'src/core';
import { createBoxComponent } from './box';
import { PositionedBoxProps } from './_types';

const createFixedComponent = (props: PositionedBoxProps): CSSObject[] => [
  ...createBoxComponent(props),
  defaultFixedStyles,
  positionStyles(props),
];

const defaultFixedStyles: CSSObject = {
  position: 'fixed',
};

export const Fixed = styled.div(createFixedComponent);
