import { CSSObject, styled } from 'src/core';
import { Box } from '../box';
import { StackOptions, StackProps } from './_types';

const createHorizontalStackComponent = (props: StackProps): CSSObject[] => [
  horizontalStackStyles(props),
];

const horizontalStackStyles = (options: StackOptions): CSSObject => ({
  alignItems: 'center',
  flexDirection: options.reversed ? 'row-reverse' : 'row',
  columnGap: options.spacing,
  rowGap: options.crossSpacing,
});

export const HStack = styled(Box)(createHorizontalStackComponent);
