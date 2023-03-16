import { CSSObject, styled } from 'src/core';
import { createBoxComponent } from '../box';
import { StackOptions, StackProps } from './_types';

const createHorizontalStackComponent = (props: StackProps): CSSObject[] => [
  defaultHorizontalStackStyles,
  ...createBoxComponent(props),
  horizontalStackStyles(props),
];

const defaultHorizontalStackStyles = {
  alignItems: 'center',
};

const horizontalStackStyles = (options: StackOptions): CSSObject => ({
  flexDirection: options.reversed ? 'row-reverse' : 'row',
  columnGap: options.spacing,
  rowGap: options.crossSpacing,
});

export const HStack = styled.div(createHorizontalStackComponent);
