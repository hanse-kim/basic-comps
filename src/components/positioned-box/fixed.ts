import { CSSObject, positionStyles, styled } from 'src/core';
import { Box } from '../box';
import { PositionedBoxProps } from './_types';

const createFixedComponent = (props: PositionedBoxProps): CSSObject[] => [
  defaultFixedStyles,
  positionStyles(props),
];

const defaultFixedStyles: CSSObject = {
  position: 'fixed',
};

export const Fixed = styled(Box)(createFixedComponent);
