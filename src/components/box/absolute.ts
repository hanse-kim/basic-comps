import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { PositionProps, positionStyles } from 'src/core/styles';
import { BoxProps, createBoxComponent } from './box';

export type AbsoluteProps = BoxProps & PositionProps;

const createAbsoluteComponent = (props: AbsoluteProps) => [
  defaultAbsoluteStyles,
  ...createBoxComponent(props),
  positionStyles(props),
];

const defaultAbsoluteStyles = css({
  position: 'absolute',
});

export const Absolute = styled.div(createAbsoluteComponent);
