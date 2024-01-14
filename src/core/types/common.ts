export type UnionString<T> = T | (string & {});

export type RecursiveObject<T> = {
  [key: string]: T | RecursiveObject<T> | undefined;
};

export type Primitive = string | number | boolean | symbol | bigint | undefined;
