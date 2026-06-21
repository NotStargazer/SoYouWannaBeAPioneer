// priority: 0
import { $LootTableEvent } from "@package/com/almostreliable/lootjs/loot";
import { $RecipesKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe";
import { $Item } from "@package/net/minecraft/world/item";
import { TagEvent } from "@side-only/server/events";

/**
 *
 * @param {TagEvent<$Item>} event
 */
const minecraftTags = (event) => {};

/**
 *
 * @param {$RecipesKubeEvent} event
 */
const minecraftRecipes = (event) => {
    event.shaped("minecraft:string", ["SS", "SS"], {
        S: "createaddition:straw"
    });
}

/**
 *
 * @param {$LootTableEvent} event
 */
const minecraftLootTables = (event) => {
  var grass_blocks = ["minecraft:short_grass", "minecraft:tall_grass", "projectvibrantjourneys:short_grass"];

  grass_blocks.forEach((e) => {
    event
      .getBlockTable(e)
      .firstPool()
      //TODO Replace straw with farmers delight straw
      .addEntry("createaddition:straw")
      .when((i) =>
        i.matchMainHand(
          ItemFilter.custom((item) => {
            if (item.getComponents().get("slag:modular_type") === "slag:knife") {
                return true;
            }
            return false;
          }),
        ),
      );
  });
};
