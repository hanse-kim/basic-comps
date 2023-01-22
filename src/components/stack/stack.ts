import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';
import { Size } from 'src/core/types';
import { BoxProps, createBoxComponent } from '../box';

type StackOptions = {
  spacing?: Size;
  reverse?: boolean;
};

export type StackProps = StackOptions & BoxProps;

const createHStackComponent = (props: StackProps) => [
  defaultHStackStyles(props),
  ...createBoxComponent(props),
];

const defaultHStackStyles = (options: StackOptions): CSSObject => ({
  flexDirection: options.reverse ? 'row-reverse' : 'row',
  alignItems: 'center',
  columnGap: options.spacing,
});

const createVStackComponent = (props: StackProps) => [
  defaultVStackStyles(props),
  ...createBoxComponent(props),
];

const defaultVStackStyles = (options: StackOptions): CSSObject => ({
  flexDirection: options.reverse ? 'column-reverse' : 'column',
  alignItems: 'stretch',
  rowGap: options.spacing,
});

export const HStack = styled.div(createHStackComponent);
export const VStack = styled.div(createVStackComponent);
