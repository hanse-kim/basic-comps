import { CSSObject, styled } from 'src/core';
import { Box } from '../box';
import { StackProps } from './_types';

const createVerticalStackComponent = (props: StackProps): CSSObject[] => [
  verticalStackStyles(props),
];

const verticalStackStyles = (props: StackProps): CSSObject => ({
  alignItems: props.alignItems || 'stretch',
  flexDirection: props.reversed ? 'column-reverse' : 'column',
  rowGap: props.spacing,
  columnGap: props.crossSpacing,
});

export const VStack = styled(Box)(createVerticalStackComponent);
