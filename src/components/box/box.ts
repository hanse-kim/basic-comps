import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';
import {
  BackgroundStyleProps,
  backgroundStyles,
  BorderStyleProps,
  borderStyles,
  EffectStyleProps,
  effectStyles,
  FlexboxStyleProps,
  flexboxStyles,
  LayoutStyleProps,
  layoutStyles,
  ParagraphStyleProps,
  paragraphStyles,
  SpaceStyleProps,
  spaceStyles,
} from 'src/core/styles';

type BoxOptions = {
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
  SpaceStyleProps;

export const createBoxComponent = (props: BoxProps): CSSObject[] => [
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
  ...(options.centering && {
    justifyContent: 'center',
    alignItems: 'center',
  }),
});

export const Box = styled.div(createBoxComponent);
