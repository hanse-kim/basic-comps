import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { PositionProps, positionStyles } from 'src/core/styles';
import { BoxProps, createBoxComponent } from './box';

export type StickyProps = BoxProps & PositionProps;

const createStickyComponent = (props: StickyProps) => [
  defaultStickyStyles,
  ...createBoxComponent(props),
  positionStyles(props),
];

const defaultStickyStyles = css({
  position: 'sticky',
});

export const Sticky = styled.div(createStickyComponent);
