import {
  CSSObject as EmotionCSSObject,
  Keyframes as EmotionKeyframes,
} from '@emotion/react';

export type CSSObject = EmotionCSSObject;
export type Keyframes = EmotionKeyframes;

export type UnionString<T> = T | (string & {});

export type RecursiveObject<T> = {
  [key: string]: T | RecursiveObject<T> | undefined;
};

export type Primitive = string | number | boolean | symbol | bigint | undefined;
