declare namespace NodeJS {
  interface ProcessEnv {
    API_URL: string;
  }
}

interface String {
  toUpperCase<T extends string>(this: T): Uppercase<T>;
  toLowerCase<T extends string>(this: T): Lowercase<T>;
}
