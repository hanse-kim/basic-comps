import styled, { CSSObject } from '@emotion/styled';
import { positionStyles } from 'src/core/styles';
import { createBoxComponent } from './box';
import { PositionedBoxProps } from './_types';

const createAbsoluteComponent = (props: PositionedBoxProps): CSSObject[] => [
  ...createBoxComponent(props),
  defaultAbsoluteStyles,
  positionStyles(props),
];

const defaultAbsoluteStyles: CSSObject = {
  position: 'absolute',
};

export const Absolute = styled.div(createAbsoluteComponent);
