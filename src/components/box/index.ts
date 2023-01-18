import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  AnimationProps,
  animationStyles,
  BackgroundProps,
  backgroundStyles,
  BorderProps,
  borderStyles,
  EffectProps,
  effectStyles,
  FlexboxProps,
  flexboxStyles,
  GridItemProps,
  gridItemStyles,
  GridProps,
  gridStyles,
  LayoutProps,
  layoutStyles,
  ParagraphProps,
  paragraphStyles,
  PositionProps,
  positionStyles,
  SpaceProps,
  spaceStyles,
  TransitionProps,
  transitionStyles,
} from 'src/core/styles';

export type BoxProps = AnimationProps &
  BackgroundProps &
  BorderProps &
  EffectProps &
  FlexboxProps &
  GridProps &
  GridItemProps &
  LayoutProps &
  ParagraphProps &
  PositionProps &
  SpaceProps &
  TransitionProps;

export const Box = styled.div<BoxProps>`
  ${(props) => animationStyles(props)}
  ${(props) => backgroundStyles(props)}
  ${(props) => borderStyles(props)}
  ${(props) => effectStyles(props)}
  ${(props) => flexboxStyles(props)}
  ${(props) => gridStyles(props)}
  ${(props) => gridItemStyles(props)}
  ${(props) => layoutStyles(props)}
  ${(props) => paragraphStyles(props)}
  ${(props) => positionStyles(props)}
  ${(props) => spaceStyles(props)}
  ${(props) => transitionStyles(props)}
`;
