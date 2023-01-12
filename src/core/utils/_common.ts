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

export function getDefined<T>(...args: (T | undefined)[]) {
  for (let i = 0; i < args.length; i++) {
    if (args[i] !== undefined) {
      return args[i];
    }
  }

  return undefined;
}
