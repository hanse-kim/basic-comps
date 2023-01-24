import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';
import { Size } from 'src/core/types';
import { BoxProps, createBoxComponent } from '../box';

type StackOptions = {
  spacing?: Size;
  reverse?: boolean;
};

export type StackProps = StackOptions & BoxProps;

const createHorizontalStackComponent = (props: StackProps) => [
  ...createBoxComponent(props),
  defaultHorizontalStackStyles(props),
];

const defaultHorizontalStackStyles = (options: StackOptions): CSSObject => ({
  flexDirection: options.reverse ? 'row-reverse' : 'row',
  alignItems: 'center',
  columnGap: options.spacing,
});

const createVerticalStackComponent = (props: StackProps) => [
  ...createBoxComponent(props),
  defaultVerticalStackStyles(props),
];

const defaultVerticalStackStyles = (options: StackOptions): CSSObject => ({
  flexDirection: options.reverse ? 'column-reverse' : 'column',
  alignItems: 'stretch',
  rowGap: options.spacing,
});

export const HStack = styled.div(createHorizontalStackComponent);
export const VStack = styled.div(createVerticalStackComponent);
