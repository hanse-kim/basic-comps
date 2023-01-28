import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';
import { positionStyles } from 'src/core/styles';
import { createBoxComponent } from './box';
import { PositionedBoxProps } from './_types';

const createStickyComponent = (props: PositionedBoxProps): CSSObject[] => [
  ...createBoxComponent(props),
  defaultStickyStyles,
  positionStyles(props),
];

const defaultStickyStyles: CSSObject = {
  position: 'sticky',
};

export const Sticky = styled.div(createStickyComponent);
