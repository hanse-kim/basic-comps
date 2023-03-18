import { CSSObject, styled } from 'src/core';
import { Box } from '../box';
import { StackProps } from './_types';

const createHorizontalStackComponent = (props: StackProps): CSSObject[] => [
  horizontalStackStyles(props),
];

const horizontalStackStyles = (props: StackProps): CSSObject => ({
  alignItems: props.alignItems || 'center',
  flexDirection: props.reversed ? 'row-reverse' : 'row',
  columnGap: props.spacing,
  rowGap: props.crossSpacing,
});

export const HStack = styled(Box)(createHorizontalStackComponent);
