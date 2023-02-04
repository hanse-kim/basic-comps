import { CSSObject, styled } from 'src/core';
import { createBoxComponent } from '../box';
import { StackOptions, StackProps } from './_types';

const createVerticalStackComponent = (props: StackProps): CSSObject[] => [
  ...createBoxComponent(props),
  defaultVerticalStackStyles(props),
];

const defaultVerticalStackStyles = (options: StackOptions): CSSObject => ({
  flexDirection: options.reversed ? 'column-reverse' : 'column',
  alignItems: 'stretch',
  rowGap: options.spacing,
  columnGap: options.crossSpacing,
});

export const VStack = styled.div(createVerticalStackComponent);
