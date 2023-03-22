import {
  BackgroundStyleProps,
  BorderStyleProps,
  EffectStyleProps,
  FlexboxStyleProps,
  InteractivityStyleProps,
  LayoutStyleProps,
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
  SpaceStyleProps &
  TransformStyleProps &
  InteractivityStyleProps;
