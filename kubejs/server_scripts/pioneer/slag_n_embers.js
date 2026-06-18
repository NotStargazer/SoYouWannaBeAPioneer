// priority: 0
import { $KubeDataGenerator } from "@package/dev/latvian/mods/kubejs/generator";
import { $RecipesKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe";

const material = {
  stone: "stone",
  flint: "flint",
  copper: "copper",
  iron: "iron",
  gold: "gold",
  diamond: "diamond",
};

const tool_part = {
  shovel: "shovel_head",
  pickaxe: "pickaxe_head",
  axe: "axe_head",
  hoe: "hoe_head",
  sword: "sword_blade",
  guard: "guard",
};

const tool = {
  shovel: "shovel",
  pickaxe: "pickaxe",
  axe: "axe",
  hoe: "hoe",
  sword: "sword",
  guard: "guard",
};

/**
 * 'slag:modular_item[slag:dynamic_parts=[{components:{"slag:built":"slag:sword","slag:material_type":"slag:stone","slag:part_type":"slag:sword_blade"},count:1,id:"slag:dynamic_part"},{components:{"slag:built":"slag:sword","slag:material_type":"slag:stone","slag:part_type":"slag:guard"},count:1,id:"slag:dynamic_part"},{components:{"slag:built":"slag:sword"},count:1,id:"minecraft:stick"}],slag:modular_type="slag:sword"]'
 */

const getSlagTool = (material, tool) => {
  let tp = tool_part[tool];
  if (tool == "sword")
    return `slag:modular_item[slag:dynamic_parts=[{components:{"slag:built":"slag:sword","slag:material_type":"slag:${material}","slag:part_type":"slag:sword_blade"},id:"slag:dynamic_part"},{components:{"slag:built":"slag:sword","slag:material_type":"slag:${material}","slag:part_type":"slag:guard"},count:1,id:"slag:dynamic_part"},{components:{"slag:built":"slag:sword"},count:1,id:"minecraft:stick"}],slag:modular_type="slag:sword"]`;
  else
    return `slag:modular_item[slag:dynamic_parts=[{components:{"slag:built":"slag:${tool}","slag:material_type":"slag:${material}","slag:part_type":"slag:${tp}"},count:1,id:"slag:dynamic_part"},{components:{"slag:built":"slag:${tool}"},count:2,id:"minecraft:stick"}],slag:modular_type="slag:${tool}"]`;
};

/**
 *
 * @returns {string}
 */
const getSlagPart = (material, tool_part) => {
  return `slag:dynamic_part[slag:material_type="slag:${material}",slag:part_type="slag:${tool_part}"]`;
};

/**
 *
 * @param {$RecipesKubeEvent} event
 */
const slagRecipes = (event) => {
  event.remove({ output: "slag:dynamic_part" });
  event.remove({ output: "#minecraft:pickaxes" });
  event.remove({ output: "#minecraft:shovels" });
  event.remove({ output: "#minecraft:axes" });
  event.remove({ output: "#minecraft:hoes" });
  event.remove({ output: "#minecraft:swords" });

  //Stone
  event.shaped(getSlagPart(material.stone, tool_part.pickaxe), [" C ", "RRR"], {
    R: "#pioneer:rocks",
    C: "#minecraft:stone_crafting_materials",
  });
  event.shaped(getSlagPart(material.stone, tool_part.shovel), ["R", "C"], {
    R: "#pioneer:rocks",
    C: "#minecraft:stone_crafting_materials",
  });

  event.shaped(getSlagPart(material.stone, tool_part.axe), ["RR", "RC"], {
    R: "#pioneer:rocks",
    C: "#minecraft:stone_crafting_materials",
  });
  event.shaped(getSlagPart(material.stone, tool_part.hoe), ["RR", " C"], {
    R: "#pioneer:rocks",
    C: "#minecraft:stone_crafting_materials",
  });
  event.shaped(getSlagPart(material.stone, tool_part.sword), ["C", "R", "R"], {
    R: "#pioneer:rocks",
    C: "#minecraft:stone_crafting_materials",
  });
  event.shaped(getSlagPart(material.stone, tool_part.guard), ["RCR"], {
    R: "#pioneer:rocks",
    C: "#minecraft:stone_crafting_materials",
  });

  createToolRecipes(event, material.stone, "minecraft");
};

/**
 *
 * @param {$RecipesKubeEvent} event
 */
const createToolRecipes = (event, material, source) => {
  event.shapeless(Item.of(getSlagTool(material, tool.pickaxe)), [
    getSlagPart(material, tool_part.pickaxe),
    "minecraft:stick",
    "minecraft:stick",
  ]);
  event.shapeless(Item.of(getSlagTool(material, tool.shovel)), [
    getSlagPart(material, tool_part.shovel),
    "minecraft:stick",
    "minecraft:stick",
  ]);
  event.shapeless(Item.of(getSlagTool(material, tool.axe)), [
    getSlagPart(material, tool_part.axe),
    "minecraft:stick",
    "minecraft:stick",
  ]);
  event.shapeless(Item.of(getSlagTool(material, tool.hoe)), [
    getSlagPart(material, tool_part.hoe),
    "minecraft:stick",
    "minecraft:stick",
  ]);
  event.shapeless(Item.of(getSlagTool(material, tool.sword)), [
    getSlagPart(material, tool_part.sword),
    getSlagPart(material, tool_part.guard),
    "minecraft:stick",
  ]);
};
