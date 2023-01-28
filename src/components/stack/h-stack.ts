import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';
import { createBoxComponent } from '../box';
import { StackOptions, StackProps } from './_types';

const createHorizontalStackComponent = (props: StackProps): CSSObject[] => [
  ...createBoxComponent(props),
  defaultHorizontalStackStyles(props),
];

const defaultHorizontalStackStyles = (options: StackOptions): CSSObject => ({
  flexDirection: options.reverse ? 'row-reverse' : 'row',
  alignItems: 'center',
  columnGap: options.spacing,
});

export const HStack = styled.div(createHorizontalStackComponent);
