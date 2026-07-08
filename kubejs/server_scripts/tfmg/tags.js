// priority: 0
import { $Item } from "@package/net/minecraft/world/item";
import { $Block } from "@package/net/minecraft/world/level/block";
import { TagEvent } from "@side-only/server/events";

const tfmgTaggedTools = ["pickaxe", "shovel", "axe", "hoe", "sword"];

/**
 *
 * @param {TagEvent<$Item>} event
 */
const tfmgItemTags = (event) => {
  tfmgTaggedTools.forEach((t) => {
    event.add(`minecraft:${t}s`, [
      `tfmg:steel_${t}`,
      `tfmg:aluminum_${t}`,
      `tfmg:lead_${t}`,
    ]);
  });
  event.add("minecraft:swords", ["tfmg:lithium_blade", "tfmg:lit_lithium_blade"]);
};
