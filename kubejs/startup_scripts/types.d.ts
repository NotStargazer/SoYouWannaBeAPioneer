export type PackName = "sywbap";
export function defineNames<T extends string>(
  arr: readonly T[],
): {
  [key in T]: `${PackName}:${key}`;
};
