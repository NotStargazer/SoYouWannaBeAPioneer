// priority: 0
import { $LootTableEvent } from "@package/com/almostreliable/lootjs/loot";
import { $Item } from "@package/net/minecraft/world/item";
import { TagEvent } from "@side-only/server/events";

/**
 *
 * @param {TagEvent<$Item>} event
 */
const minecraftTags = (event) => {}

/**
 * 
 * @param {$LootTableEvent} event
 */
const minecraftLootTables = (event) => {
    event.modifyBlockTables("minecraft:short_grass", "minecraft:tall_grass").firstPool()
}