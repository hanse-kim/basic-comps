import { CSSObject, styled } from 'src/core';
import { createBoxComponent } from '../box';
import { StackOptions, StackProps } from './_types';

const createVerticalStackComponent = (props: StackProps): CSSObject[] => [
  defaultVerticalStackStyles,
  ...createBoxComponent(props),
  verticalStackStyles(props),
];

const defaultVerticalStackStyles = {
  alignItems: 'stretch',
};

const verticalStackStyles = (options: StackOptions): CSSObject => ({
  flexDirection: options.reversed ? 'column-reverse' : 'column',
  rowGap: options.spacing,
  columnGap: options.crossSpacing,
});

export const VStack = styled.div(createVerticalStackComponent);
