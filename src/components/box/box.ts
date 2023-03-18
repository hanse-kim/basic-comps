import {
  backgroundStyles,
  borderStyles,
  CSSObject,
  effectStyles,
  flexboxStyles,
  interactivityStyles,
  layoutStyles,
  paragraphStyles,
  spaceStyles,
  styled,
  transformStyles,
} from 'src/core';
import { BoxOptions, BoxProps } from './_types';

const createBoxComponent = (props: BoxProps): CSSObject[] => [
  defaultBoxStyles(props),
  backgroundStyles(props),
  borderStyles(props),
  effectStyles(props),
  flexboxStyles(props),
  layoutStyles(props),
  paragraphStyles(props),
  spaceStyles(props),
  transformStyles(props),
  interactivityStyles(props),
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
