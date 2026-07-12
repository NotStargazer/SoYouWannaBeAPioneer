export type PackName = "pioneer";
export function defineNames<T extends string>(
  arr: readonly T[],
): {
  [key in T]: `${PackName}:${key}`;
};

export type ToolTier = "wooden" | "stone" | "copper" | "iron";

export interface Metal {
  name: string;
  requireTier: ToolTier;
  items?: {
    ingot?: boolean;
    nugget?: boolean;
    sheet?: boolean;
    rod?: boolean;
    wire?: boolean;
    gear?: boolean;
    dust?: boolean;
    dirtyDust?: boolean;
    raw?: boolean;
    crushed?: boolean;
  };
  blocks?: {
    metal: boolean;
    raw: boolean;
  };
}
