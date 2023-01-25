import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { positionStyles } from 'src/core/styles';
import { createBoxComponent } from './box';
import { PositionedBoxProps } from './_types';

const createFixedComponent = (props: PositionedBoxProps) => [
  ...createBoxComponent(props),
  defaultFixedStyles,
  positionStyles(props),
];

const defaultFixedStyles = css({
  position: 'fixed',
});

export const Fixed = styled.div(createFixedComponent);
