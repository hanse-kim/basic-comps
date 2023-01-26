import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';
import { createBoxComponent } from '../box';
import { StackOptions, StackProps } from './_types';

const createVerticalStackComponent = (props: StackProps) => [
  ...createBoxComponent(props),
  defaultVerticalStackStyles(props),
];

const defaultVerticalStackStyles = (options: StackOptions): CSSObject => ({
  flexDirection: options.reverse ? 'column-reverse' : 'column',
  alignItems: 'stretch',
  rowGap: options.spacing,
});

export const VStack = styled.div(createVerticalStackComponent);
