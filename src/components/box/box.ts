import {
  backgroundStyles,
  borderStyles,
  CSSObject,
  effectStyles,
  flexboxStyles,
  interactivityStyles,
  layoutStyles,
  spaceStyles,
  styled,
  transformStyles,
} from 'src/core';
import { pseudoStyles } from 'src/core/styles/pseudo';
import { BoxOptions, BoxProps } from './_types';

export const Box = styled.div(createBoxComponent);

function createBoxComponent(props: BoxProps): CSSObject[] {
  return [
    defaultBoxStyles(props),
    backgroundStyles(props),
    borderStyles(props),
    effectStyles(props),
    flexboxStyles(props),
    layoutStyles(props),
    spaceStyles(props),
    transformStyles(props),
    interactivityStyles(props),
    pseudoStyles(props),
  ];
}

function defaultBoxStyles(options: BoxOptions): CSSObject {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    position: options.relative ? 'relative' : undefined,
    ...(options.centering && {
      justifyContent: 'center',
      alignItems: 'center',
    }),
  };
}
