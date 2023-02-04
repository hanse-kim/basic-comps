import { CSSObject, styled } from 'src/core';
import { createBoxComponent } from '../box';
import { StackOptions, StackProps } from './_types';

const createHorizontalStackComponent = (props: StackProps): CSSObject[] => [
  ...createBoxComponent(props),
  defaultHorizontalStackStyles(props),
];

const defaultHorizontalStackStyles = (options: StackOptions): CSSObject => ({
  flexDirection: options.reversed ? 'row-reverse' : 'row',
  alignItems: 'center',
  columnGap: options.spacing,
  rowGap: options.crossSpacing,
});

export const HStack = styled.div(createHorizontalStackComponent);
