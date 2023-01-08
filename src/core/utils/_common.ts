import { RecursiveObject } from '../types';

export function getValueByFlattedKey<T>(
  flattedKey: string,
  obj: RecursiveObject<T>
): T | undefined {
  const splitted = flattedKey.split('.');
  let result: RecursiveObject<T> | T = obj;

  while (splitted.length > 0 && result !== undefined) {
    const key = splitted.shift();
    if (!key || !isRecursiveObject(result)) {
      break;
    }

    result = result[key];
  }

  return isRecursiveObject(result) ? undefined : result;
}

function isRecursiveObject<T>(obj: unknown): obj is RecursiveObject<T> {
  return typeof obj === 'object';
}
