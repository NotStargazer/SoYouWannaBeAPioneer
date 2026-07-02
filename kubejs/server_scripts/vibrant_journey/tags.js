// priority: 0
import { $Item } from "@package/net/minecraft/world/item";
import { $Block } from "@package/net/minecraft/world/level/block";
import { TagEvent } from "@side-only/server/events";

/**
 *
 * @param {TagEvent<$Item>} event
 */
const vibrantJournyItemTags = (event) => {
  event.add(`${global.pack.name}:rocks`, [
    "projectvibrantjourneys:rocks",
    "projectvibrantjourneys:mossy_rocks",
    "projectvibrantjourneys:sandstone_rocks",
    "projectvibrantjourneys:red_sandstone_rocks",
  ]);
};

/**
 *
 * @param {TagEvent<$Block>} event
 */
const vibrantJournyBlockTags = (event) => {
  event.add(`${global.pack.name}:drops_straw`, [
    "minecraft:short_grass",
    "minecraft:tall_grass",
    "projectvibrantjourneys:short_grass",
  ]);
};
