import { CSSObject } from '@emotion/react';
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

type BoxOptions = {
  relative?: boolean;
};

export type BoxProps = BoxOptions &
  BackgroundProps &
  BorderProps &
  EffectProps &
  FlexboxProps &
  LayoutProps &
  ParagraphProps &
  SpaceProps;

export const createBoxComponent = (props: BoxProps) => [
  defaultBoxStyles(props),
  backgroundStyles(props),
  borderStyles(props),
  effectStyles(props),
  flexboxStyles(props),
  layoutStyles(props),
  paragraphStyles(props),
  spaceStyles(props),
];

const defaultBoxStyles = (options: BoxOptions): CSSObject => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  position: options.relative ? 'relative' : undefined,
});

export const Box = styled.div(createBoxComponent);
