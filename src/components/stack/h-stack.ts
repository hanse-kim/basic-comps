import { CSSObject, styled } from 'src/core';
import { Box } from '../box';
import { StackProps } from './_types';

export const HStack = styled(Box)(createHorizontalStackComponent);

function createHorizontalStackComponent(props: StackProps): CSSObject[] {
  return [horizontalStackStyles(props)];
}

function horizontalStackStyles(props: StackProps): CSSObject {
  return {
    alignItems: props.alignItems || 'center',
    flexDirection: props.reversed ? 'row-reverse' : 'row',
    columnGap: props.spacing,
    rowGap: props.crossSpacing,
  };
}
