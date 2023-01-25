import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { positionStyles } from 'src/core/styles';
import { createBoxComponent } from './box';
import { PositionedBoxProps } from './_types';

const createStickyComponent = (props: PositionedBoxProps) => [
  ...createBoxComponent(props),
  defaultStickyStyles,
  positionStyles(props),
];

const defaultStickyStyles = css({
  position: 'sticky',
});

export const Sticky = styled.div(createStickyComponent);
