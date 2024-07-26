declare namespace NodeJS {
  interface ProcessEnv {
    API_URL: string;
  }
}

interface String {
  toUpperCase<T extends string>(this: T): Uppercase<T>;
  toLowerCase<T extends string>(this: T): Lowercase<T>;
}

type Primitive = number | string | bigint | symbol | boolean | undefined | null;

interface ReadonlyArray {
  includes(searchElement: Primitive, fromIndex?: number): boolean;
}

interface Array {
  includes(searchElement: Primitive, fromIndex?: number): boolean;
}
