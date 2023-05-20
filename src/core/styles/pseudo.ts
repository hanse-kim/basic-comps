import { CSSObject } from '../types';
import { AnimationStyleProps, animationStyles } from './animation';
import { BackgroundStyleProps, backgroundStyles } from './background';
import { BorderStyleProps, borderStyles } from './border';
import { EffectStyleProps, effectStyles } from './effect';
import { FlexboxStyleProps, flexboxStyles } from './flexbox';
import { GridStyleProps, gridStyles } from './grid';
import { GridItemStyleProps, gridItemStyles } from './grid-item';
import { InteractivityStyleProps, interactivityStyles } from './interactivity';
import { LayoutStyleProps, layoutStyles } from './layout';
import { ParagraphStyleProps, paragraphStyles } from './paragraph';
import { PositionStyleProps, positionStyles } from './position';
import { SpaceStyleProps, spaceStyles } from './space';
import { TransformStyleProps, transformStyles } from './transform';
import { TransitionStyleProps, transitionStyles } from './transition';

const pseudoStylesKeyMap = {
  _hover: ':hover',
  _active: ':active',
  _focus: ':focus',
  _enabled: ':enabled',
  _disabled: ':disabled',
  _readonly: ':readonly',
  _checked: ':checked',
  _required: ':required',
  __before: '::before',
  __after: '::after',
} as const;

type PseudoItemProps = AnimationStyleProps &
  BackgroundStyleProps &
  BorderStyleProps &
  EffectStyleProps &
  FlexboxStyleProps &
  GridItemStyleProps &
  GridStyleProps &
  InteractivityStyleProps &
  LayoutStyleProps &
  ParagraphStyleProps &
  PositionStyleProps &
  SpaceStyleProps &
  TransformStyleProps &
  TransitionStyleProps;

export type PseudoStyleProps = Partial<
  Record<keyof typeof pseudoStylesKeyMap, PseudoItemProps>
>;

export const pseudoStyles = (props: PseudoStyleProps): CSSObject => {
  const result: Record<string, CSSObject> = {};

  Object.entries(pseudoStylesKeyMap).forEach(([propsKey, cssKey]) => {
    const pseudoItemProps = props[propsKey as keyof typeof pseudoStylesKeyMap];
    if (!pseudoItemProps) {
      return;
    }

    result[cssKey] = pseudoItemStyles(pseudoItemProps);
  });

  return result;
};

const pseudoItemStyles = (props: PseudoItemProps): CSSObject => {
  return {
    ...animationStyles(props),
    ...backgroundStyles(props),
    ...borderStyles(props),
    ...effectStyles(props),
    ...flexboxStyles(props),
    ...gridItemStyles(props),
    ...gridStyles(props),
    ...interactivityStyles(props),
    ...layoutStyles(props),
    ...paragraphStyles(props),
    ...positionStyles(props),
    ...spaceStyles(props),
    ...transformStyles(props),
    ...transitionStyles(props),
  };
};
