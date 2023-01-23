import { CSSObject } from '@emotion/react';
import { CSSProperties } from 'react';
import { Size } from '../types';
import { parseSize } from '../utils';

export type TransformStyleProps = {
  transform?: CSSProperties['transform'];
  transformBox?: CSSProperties['transformBox'];
  transformOrigin?: CSSProperties['transformOrigin'];
  transformStyle?: CSSProperties['transformStyle'];

  scale?: number | [scaleX: number, scaleY: number];
  scaleX?: number;
  scaleY?: number;
  translate?: [translateX: Size, translateY: Size];
  translateX?: Size;
  translateY?: Size;
  rotate?: number;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
};

export const transformStyles = (props: TransformStyleProps): CSSObject => {
  const { transform, scale, translate, rotateX, rotateY, rotateZ } = props;

  if (transform) {
    return { transform };
  }

  const scaleX = (Array.isArray(scale) ? scale[0] : scale) || props.scaleX;
  const scaleY = (Array.isArray(scale) ? scale[1] : scale) || props.scaleY;

  const translateX = parseSize((translate && translate[0]) || props.translateX);
  const translateY = parseSize((translate && translate[1]) || props.translateY);

  const rotate = props.rotate || rotateZ;

  const transformFunctions = [
    scaleX && `scaleX(${scaleX})`,
    scaleY && `scaleY(${scaleY})`,
    translateX && `translateX(${translateX})`,
    translateY && `translateY(${translateY})`,
    rotate && `rotate(${rotate}deg)`,
    rotateX && `rotateX(${rotateX}deg)`,
    rotateY && `rotateY(${rotateY}deg)`,
  ];

  return { transform: transformFunctions.join(' ') };
};
