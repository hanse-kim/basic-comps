import {
  BackgroundStyleProps,
  BorderStyleProps,
  EffectStyleProps,
  FlexboxStyleProps,
  LayoutStyleProps,
  ParagraphStyleProps,
  PositionStyleProps,
  SpaceStyleProps,
  TransformStyleProps,
} from 'src/core';

export type BoxOptions = {
  relative?: boolean;
  centering?: boolean;
};

export type BoxProps = BoxOptions &
  BackgroundStyleProps &
  BorderStyleProps &
  EffectStyleProps &
  FlexboxStyleProps &
  LayoutStyleProps &
  ParagraphStyleProps &
  SpaceStyleProps &
  TransformStyleProps;

export type PositionedBoxProps = BoxProps & PositionStyleProps;
