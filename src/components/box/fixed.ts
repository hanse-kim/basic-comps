import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { PositionStyleProps, positionStyles } from 'src/core/styles';
import { BoxProps, createBoxComponent } from './box';

export type FixedProps = BoxProps & PositionStyleProps;

const createFixedComponent = (props: FixedProps) => [
  defaultFixedStyles,
  ...createBoxComponent(props),
  positionStyles(props),
];

const defaultFixedStyles = css({
  position: 'fixed',
});

export const Fixed = styled.div(createFixedComponent);
