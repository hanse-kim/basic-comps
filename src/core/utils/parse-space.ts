import { Space } from '../types';
import { parseSize, ParseSizeOptions } from './parse-size';

type ParsedSpace = {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
};

export function parseSpace(
  space?: Space | false,
  parseSizeOptions: ParseSizeOptions = {}
): ParsedSpace {
  if (space === undefined || space === false) {
    return {};
  }

  let spaceArray: string[];

  if (!Array.isArray(space)) {
    spaceArray = parseSize(space).split(' ');
  } else {
    spaceArray = space.map((spaceValue) =>
      parseSize(spaceValue, parseSizeOptions)
    );
  }

  if (spaceArray.length === 1) {
    const [spaceValue] = spaceArray;
    return {
      left: spaceValue,
      right: spaceValue,
      top: spaceValue,
      bottom: spaceValue,
    };
  }

  if (spaceArray.length === 2) {
    const [spaceY, spaceX] = spaceArray;
    return { left: spaceX, right: spaceX, top: spaceY, bottom: spaceY };
  }

  if (spaceArray.length === 3) {
    const [spaceTop, spaceX, spaceBottom] = spaceArray;
    return { left: spaceX, right: spaceX, top: spaceTop, bottom: spaceBottom };
  }

  if (spaceArray.length === 4) {
    const [spaceTop, spaceRight, spaceBottom, spaceLeft] = spaceArray;
    return {
      left: spaceLeft,
      top: spaceTop,
      right: spaceRight,
      bottom: spaceBottom,
    };
  }

  return {};
}
