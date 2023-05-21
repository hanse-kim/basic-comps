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
import { PseudoStyleProps } from 'src/core/styles/pseudo';

export type BoxOptions = {
  relative?: boolean;
  center?: boolean;
};

export type BoxProps = BoxOptions &
  BackgroundStyleProps &
  BorderStyleProps &
  EffectStyleProps &
  FlexboxStyleProps &
  LayoutStyleProps &
  SpaceStyleProps &
  TransformStyleProps &
  InteractivityStyleProps &
  PseudoStyleProps;
