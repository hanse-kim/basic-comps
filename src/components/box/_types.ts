import {
  BackgroundStyleProps,
  BorderStyleProps,
  EffectStyleProps,
  FlexboxStyleProps,
  LayoutStyleProps,
  ParagraphStyleProps,
  PositionStyleProps,
  SpaceStyleProps,
} from 'src/core/styles';
import { TransformStyleProps } from 'src/core/styles/transform';

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
