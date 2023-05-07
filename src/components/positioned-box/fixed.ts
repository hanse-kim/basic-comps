import { CSSObject, positionStyles, styled } from 'src/core';
import { Box } from '../box';
import { PositionedBoxProps } from './_types';

export const Fixed = styled(Box)(createFixedComponent);

function createFixedComponent(props: PositionedBoxProps): CSSObject[] {
  return [defaultFixedStyles, positionStyles(props)];
}

const defaultFixedStyles: CSSObject = {
  position: 'fixed',
};
