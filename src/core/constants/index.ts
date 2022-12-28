export const baseFontSize = 16;

export const fontWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

export const zIndices = {
  below: -1,
  base: 0,
  above: 1,
  dropdown: 1000,
  layout: 1100,
  overlay: 1200,
  drawer: 1300,
  modal: 1400,
  popover: 1500,
  toast: 1600,
  tooltip: 1700,
} as const;
