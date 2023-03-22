import { CSSObject, CSSProperties } from '../types';

export type InteractivityStyleProps = {
  userSelect?: CSSProperties['userSelect'];
  pointerEvents?: CSSProperties['pointerEvents'];
  resize?: CSSProperties['resize'];
  cursor?: CSSProperties['cursor'];
};

export const interactivityStyles = (
  props: InteractivityStyleProps
): CSSObject => {
  const { userSelect, pointerEvents, resize, cursor } = props;

  return {
    userSelect,
    pointerEvents,
    resize,
    cursor,
  };
};
