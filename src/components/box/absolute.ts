import { CSSObject, positionStyles, styled } from 'src/core';
import { Box } from './box';

import { PositionedBoxProps } from './_types';
const createAbsoluteComponent = (props: PositionedBoxProps): CSSObject[] => [
  defaultAbsoluteStyles,
  positionStyles(props),
];

const defaultAbsoluteStyles: CSSObject = {
  position: 'absolute',
};

export const Absolute = styled(Box)(createAbsoluteComponent);
