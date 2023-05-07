import { CSSObject, positionStyles, styled } from 'src/core';
import { Box } from '../box';
import { PositionedBoxProps } from './_types';

export const Absolute = styled(Box)(createAbsoluteComponent);

function createAbsoluteComponent(props: PositionedBoxProps): CSSObject[] {
  return [defaultAbsoluteStyles, positionStyles(props)];
}

const defaultAbsoluteStyles: CSSObject = {
  position: 'absolute',
};
