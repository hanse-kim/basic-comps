import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';
import {
  backgroundStyles,
  borderStyles,
  effectStyles,
  flexboxStyles,
  layoutStyles,
  paragraphStyles,
  spaceStyles,
} from 'src/core/styles';
import { transformStyles } from 'src/core/styles/transform';
import { BoxOptions, BoxProps } from './_types';

export const createBoxComponent = (props: BoxProps): CSSObject[] => [
  defaultBoxStyles(props),
  backgroundStyles(props),
  borderStyles(props),
  effectStyles(props),
  flexboxStyles(props),
  layoutStyles(props),
  paragraphStyles(props),
  spaceStyles(props),
  transformStyles(props),
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
