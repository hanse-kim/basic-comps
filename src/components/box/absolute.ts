import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { positionStyles } from 'src/core/styles';
import { createBoxComponent } from './box';
import { PositionedBoxProps } from './_types';

const createAbsoluteComponent = (props: PositionedBoxProps) => [
  ...createBoxComponent(props),
  defaultAbsoluteStyles,
  positionStyles(props),
];

const defaultAbsoluteStyles = css({
  position: 'absolute',
});

export const Absolute = styled.div(createAbsoluteComponent);
