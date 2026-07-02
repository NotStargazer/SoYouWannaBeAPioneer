// priority: 0
import { $LootTableEvent } from "@package/com/almostreliable/lootjs/loot";

/**
 *
 * @param {$LootTableEvent} event
 */
const minecraftLootTables = (event) => {

  Block.getTaggedIds("pioneer:drops_straw").forEach((grass_block) => {
    event
      .getBlockTable(grass_block)
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