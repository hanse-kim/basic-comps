import { CSSObject, CSSProperties } from '../types';

export type FlexboxStyleProps = {
  order?: CSSProperties['order'];

  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];

  flexFlow?: CSSProperties['flexFlow'];
  flexWrap?: CSSProperties['flexWrap'];
  flexDirection?: CSSProperties['flexDirection'];

  flex?: CSSProperties['flex'];
  flexGrow?: CSSProperties['flexGrow'];
  flexShrink?: CSSProperties['flexShrink'];
  flexBasis?: CSSProperties['flexBasis'];
};

export const flexboxStyles = (props: FlexboxStyleProps): CSSObject => {
  const {
    order,
    justifyContent,
    alignItems,
    flexFlow,
    flexWrap,
    flexDirection,
    flex,
    flexGrow,
    flexShrink,
    flexBasis,
  } = props;

  return {
    order,
    justifyContent,
    alignItems,
    flexFlow,
    flexWrap,
    flexDirection,
    flex,
    flexGrow,
    flexShrink,
    flexBasis,
  };
};
