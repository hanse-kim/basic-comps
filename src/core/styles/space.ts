import { css } from '@emotion/react';
import { Size, Space } from '../types';
import { parseSpace } from '../utils';
import { getDefined } from '../utils/get-defined';

export type SpaceProps = {
  margin?: Space;
  marginX?: Size;
  marginY?: Size;
  marginLeft?: Size;
  marginTop?: Size;
  marginRight?: Size;
  marginBottom?: Size;

  padding?: Space;
  paddingX?: Size;
  paddingY?: Size;
  paddingLeft?: Size;
  paddingTop?: Size;
  paddingRight?: Size;
  paddingBottom?: Size;
};

export const spaceStyles = (props: SpaceProps) => {
  const margin = parseSpace(props.margin);
  const marginLeft = getDefined(props.marginLeft, props.marginX, margin.left);
  const marginRight = getDefined(
    props.marginRight,
    props.marginX,
    margin.right
  );
  const marginTop = getDefined(props.marginTop, props.marginY, margin.top);
  const marginBottom = getDefined(
    props.marginBottom,
    props.marginY,
    margin.bottom
  );

  const padding = parseSpace(props.padding);
  const paddingLeft = getDefined(
    props.paddingLeft,
    props.paddingX,
    padding.left
  );
  const paddingRight = getDefined(
    props.paddingRight,
    props.paddingX,
    padding.right
  );
  const paddingTop = getDefined(props.paddingTop, props.paddingY, padding.top);
  const paddingBottom = getDefined(
    props.paddingBottom,
    props.paddingY,
    padding.bottom
  );

  return css({
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
  });
};
