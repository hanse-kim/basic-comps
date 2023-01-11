import { Primitive, RecursiveObject } from '../types';

export function getValueByFlattedKey<T extends Primitive>(
  flattedKey: string,
  obj: RecursiveObject<T>
): T | undefined {
  const splitted = flattedKey.split('.');
  let result: RecursiveObject<T> | T | undefined = obj;

  while (splitted.length > 0 && result !== undefined) {
    const key = splitted.shift();
    if (!key || typeof result !== 'object') {
      break;
    }

    result = result[key];
  }

  if (typeof result === 'object') {
    return undefined;
  }

  return result;
}
