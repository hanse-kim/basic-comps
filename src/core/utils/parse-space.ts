import { Space } from '../types';
import { parseSize, ParseSizeOptions } from './parse-size';

type ParsedSpace = {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
};

export const parseSpace = (
  space?: Space | false,
  parseSizeOptions: ParseSizeOptions = {}
): ParsedSpace => {
  if (space === undefined || space === false) {
    return {};
  }

  if (!Array.isArray(space)) {
    space = parseSize(space, parseSizeOptions);
    return { left: space, right: space, top: space, bottom: space };
  }

  const spaceArray = space.map((spaceValue) =>
    parseSize(spaceValue, parseSizeOptions)
  );

  if (space.length === 2) {
    const [spaceY, spaceX] = spaceArray;
    return { left: spaceX, right: spaceX, top: spaceY, bottom: spaceY };
  }

  if (space.length === 3) {
    const [spaceTop, spaceX, spaceBottom] = spaceArray;
    return { left: spaceX, right: spaceX, top: spaceTop, bottom: spaceBottom };
  }

  const [spaceTop, spaceRight, spaceBottom, spaceLeft] = spaceArray;
  return {
    left: spaceLeft,
    top: spaceTop,
    right: spaceRight,
    bottom: spaceBottom,
  };
};
