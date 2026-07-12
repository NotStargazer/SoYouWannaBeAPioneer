// priority: 0
import { tags } from "@package/net/minecraft";
import { Block } from "@side-only/startup/events/registry";

/**
 *
 * @param {Block} event
 */
const registerModPackBlocks = (event) => {
  // utils thingy we can probably move elsewhere
  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  /**
   *
   * @param {import('../types').ToolTier} tier
   * @returns {number}
   */
  const getHardnessFromTier = (tier) => ({ stone: 3, copper: 5, iron: 8 })[tier] ?? 1;
  /**
   *
   * @param {import('../types').Metal} material
   */
  const addMetalBlocks = (material) => {
    if (material.blocks == undefined || material.blocks.metal) {
      const name = `${material.name}_block`;
      console.debug(`Adding ${name}`);
      event
        .create(`${global.pack.name}:${name}`)
        .displayName(`Block of ${capitalize(material.name)}`)
        .tagBlock([`c:storage_blocks`, `c:storage_blocks/${material.name}`])
        .tagBlock(["minecraft:mineable/pickaxe", `minecraft:needs_${material.requireTier}_tool`])
        .hardness(getHardnessFromTier(material.requireTier))
        .requiresTool();
    }

    if (material.blocks == undefined || material.blocks.raw) {
      const name = `raw_${material.name}_block`;
      console.debug(`Adding ${name}`);
      event
        .create(`${global.pack.name}:${name}`)
        .displayName(`Block of Raw ${capitalize(material.name)}`)
        .tagBlock([`c:storage_blocks`, `c:storage_blocks/raw_${material.name}`])
        .tagBlock(["minecraft:mineable/pickaxe", `minecraft:needs_${material.requireTier}_tool`])
        .hardness(getHardnessFromTier(material.requireTier))
        .requiresTool();
    }
  };

  global.pack.metals.forEach(addMetalBlocks);
};
