// priority: 0
import { $LootTableEvent } from "@package/com/almostreliable/lootjs/loot";

/**
 *
 * @param {$LootTableEvent} event
 */
const minecraftLootTables = (event) => {

  Block.getTaggedIds(`${global.pack.name}:drops_straw`).forEach((grass_block) => {
    event
      .getBlockTable(grass_block)
      .firstPool()
      .addEntry("farmersdelight:straw")
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