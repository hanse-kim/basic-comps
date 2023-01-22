import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { PositionStyleProps, positionStyles } from 'src/core/styles';
import { BoxProps, createBoxComponent } from './box';

export type StickyProps = BoxProps & PositionStyleProps;

const createStickyComponent = (props: StickyProps) => [
  defaultStickyStyles,
  ...createBoxComponent(props),
  positionStyles(props),
];

const defaultStickyStyles = css({
  position: 'sticky',
});

export const Sticky = styled.div(createStickyComponent);
