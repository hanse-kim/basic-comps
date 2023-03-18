import { CSSObject, styled } from 'src/core';
import { Box } from '../box';
import { StackOptions, StackProps } from './_types';

const createVerticalStackComponent = (props: StackProps): CSSObject[] => [
  verticalStackStyles(props),
];

const verticalStackStyles = (options: StackOptions): CSSObject => ({
  alignItems: 'stretch',
  flexDirection: options.reversed ? 'column-reverse' : 'column',
  rowGap: options.spacing,
  columnGap: options.crossSpacing,
});

export const VStack = styled(Box)(createVerticalStackComponent);
