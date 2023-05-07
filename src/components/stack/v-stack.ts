import { CSSObject, styled } from 'src/core';
import { Box } from '../box';
import { StackProps } from './_types';

export const VStack = styled(Box)(createVerticalStackComponent);

function createVerticalStackComponent(props: StackProps): CSSObject[] {
  return [verticalStackStyles(props)];
}

function verticalStackStyles(props: StackProps): CSSObject {
  return {
    alignItems: props.alignItems || 'stretch',
    flexDirection: props.reversed ? 'column-reverse' : 'column',
    rowGap: props.spacing,
    columnGap: props.crossSpacing,
  };
}
