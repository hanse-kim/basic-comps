export function getDefined<T>(...args: (T | undefined)[]) {
  for (let i = 0; i < args.length; i++) {
    if (args[i] !== undefined) {
      return args[i];
    }
  }

  return undefined;
}
