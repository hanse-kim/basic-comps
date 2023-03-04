import emotionStyled, { CreateStyled } from '@emotion/styled';

export const styled =
  'default' in emotionStyled
    ? (emotionStyled.default as CreateStyled)
    : emotionStyled;
