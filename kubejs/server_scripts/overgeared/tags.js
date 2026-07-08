// priority: 0
import { $Item } from "@package/net/minecraft/world/item";
import { $Block } from "@package/net/minecraft/world/level/block";
import { TagEvent } from "@side-only/server/events";

/**
 *
 * @param {TagEvent<$Item>} event
 */
const overgearedItemTags = (event) => {
  event.add("overgeared:knappables", "minecraft:flint");
  event.add("overgeared:knappables", `#${global.pack.name}:rocks`);
};
