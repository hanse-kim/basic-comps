import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  BackgroundProps,
  backgroundStyles,
  BorderProps,
  borderStyles,
  EffectProps,
  effectStyles,
  FlexboxProps,
  flexboxStyles,
  LayoutProps,
  layoutStyles,
  ParagraphProps,
  paragraphStyles,
  SpaceProps,
  spaceStyles,
} from 'src/core/styles';

export type BoxProps = BackgroundProps &
  BorderProps &
  EffectProps &
  FlexboxProps &
  LayoutProps &
  ParagraphProps &
  SpaceProps;

export const Box = styled.div<BoxProps>((props) => [
  defaultBoxStyles,
  backgroundStyles(props),
  borderStyles(props),
  effectStyles(props),
  flexboxStyles(props),
  layoutStyles(props),
  paragraphStyles(props),
  spaceStyles(props),
]);

const defaultBoxStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
});
