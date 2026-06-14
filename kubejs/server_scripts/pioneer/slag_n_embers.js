// priority: 0
import { $RecipesKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe";

const material = {
  stone: "stone",
  copper: "copper",
  iron: "iron",
  gold: "gold",
  diamond: "diamond",
}

const tool_part = {
  shovel: "shovel_head",
  pickaxe: "pickaxe_head",
  axe: "axe_head",
  hoe: "hoe_head",
  sword: "sword_blade",
  guard: "guard",
}

//'slag:dynamic_part[slag:material_type="slag:stone",slag:part_type="slag:pickaxe_head"]'

/**
 * 
 * @returns {string}
 */
const getSlagPart = (material, tool_part) => {
  return `slag:dynamic_part[slag:material_type="slag:${material}",slag:part_type="slag:${tool_part}"]`;
}

/**
 * 
 * @param {$RecipesKubeEvent} event 
 */
const slagRecipes = (event) => {
  event.remove(Item.of("slag:dynamic_part"));
  event.remove({ output: '#minecraft:pickaxes' });
  event.remove({ output: '#minecraft:shovels' });
  event.remove({ output: '#minecraft:axes' });
  event.remove({ output: '#minecraft:hoes' });
  event.remove({ output: '#minecraft:swords' });

  //Stone
  event.shaped(getSlagPart(material.stone, tool_part.pickaxe), 
  [
    ' R ',
    'CCC',
  ],
  {
    R: '#pioneer:rocks',
    C: '#minecraft:stone_crafting_materials',
  });
  event.shaped(getSlagPart(material.stone, tool_part.shovel), 
  [
    'R',
    'C',
  ],
  {
    R: '#pioneer:rocks',
    C: '#minecraft:stone_crafting_materials',
  });

  event.shaped(getSlagPart(material.stone, tool_part.axe), 
  [
    'RR',
    'RC',
  ],
  {
    R: '#pioneer:rocks',
    C: '#minecraft:stone_crafting_materials',
  });
  event.shaped(getSlagPart(material.stone, tool_part.hoe), 
  [
    'RR',
    ' C',
  ],
  {
    R: '#pioneer:rocks',
    C: '#minecraft:stone_crafting_materials',
  });
  event.shaped(getSlagPart(material.stone, tool_part.sword), 
  [
    'C',
    'R',
    'R',
  ],
  {
    R: '#pioneer:rocks',
    C: '#minecraft:stone_crafting_materials',
  });
  event.shaped(getSlagPart(material.stone, tool_part.guard), 
  [
    'RCR',
  ],
  {
    R: '#pioneer:rocks',
    C: '#minecraft:stone_crafting_materials',
  });

  constructTools(event, material.stone, 'minecraft');
}

/**
 * 
 * @param {$RecipesKubeEvent} event 
 */
const constructTools = (event, material, source) => {
  event.shapeless(Item.of(`${source}:${material}_pickaxe`), 
  [
    getSlagPart(material, tool_part.pickaxe),
    'minecraft:stick',
  ])
  event.shapeless(Item.of(`${source}:${material}_shovel`), 
  [
    getSlagPart(material, tool_part.shovel),
    'minecraft:stick',
  ])
  event.shapeless(Item.of(`${source}:${material}_axe`), 
  [
    getSlagPart(material, tool_part.axe),
    'minecraft:stick',
  ])
  event.shapeless(Item.of(`${source}:${material}_hoe`), 
  [
    getSlagPart(material, tool_part.hoe),
    'minecraft:stick',
  ])
  event.shapeless(Item.of(`${source}:${material}_sword`), 
  [
    getSlagPart(material, tool_part.sword),
    getSlagPart(material, tool_part.guard),
    'minecraft:stick',
  ])
}

