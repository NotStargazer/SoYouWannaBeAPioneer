// priority: 0
import { $KubeDataGenerator } from "@package/dev/latvian/mods/kubejs/generator";
import { $RecipesKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe";
import { $AddEntriesKubeEvent, $RemoveEntriesKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe/viewer";

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
  knife: "knife_head",
};

const tool = {
  shovel: "shovel",
  pickaxe: "pickaxe",
  axe: "axe",
  hoe: "hoe",
  sword: "sword",
  knife: "knife",
};

const slagToolRemoval = (material, tool) => {
  let tp = tool_part[tool];
  if (tool == "sword")
    return `slag:modular_item[slag:dynamic_parts=[{components:{"slag:built":"slag:sword","slag:material_type":"slag:${material}","slag:part_type":"slag:sword_blade"},id:"slag:dynamic_part"},{components:{"slag:built":"slag:sword","slag:material_type":"slag:${material}","slag:part_type":"slag:guard"},count:1,id:"slag:dynamic_part"},{components:{"slag:built":"slag:sword"},count:1,id:"minecraft:stick"}],slag:modular_type="slag:sword"]`;
  else if (tool == "knife")
    return `slag:modular_item[slag:dynamic_parts=[{components:{"slag:built":"slag:${tool}","slag:material_type":"slag:${material}","slag:part_type":"slag:${tp}"},count:1,id:"slag:dynamic_part"},{components:{"slag:built":"slag:${tool}"},count:1,id:"minecraft:stick"}],slag:modular_type="slag:${tool}"]`;
  else
    return `slag:modular_item[slag:dynamic_parts=[{components:{"slag:built":"slag:${tool}","slag:material_type":"slag:${material}","slag:part_type":"slag:${tp}"},count:1,id:"slag:dynamic_part"},{components:{"slag:built":"slag:${tool}"},count:2,id:"minecraft:stick"}],slag:modular_type="slag:${tool}"]`;
};

const getSlagTool = (material, tool) => {
  let tp = tool_part[tool];
  if (tool == "sword")
    return `slag:modular_item[slag:dynamic_parts=[{components:{"slag:built":"slag:sword","slag:material_type":"slag:${material}","slag:part_type":"slag:sword_blade"},id:"slag:dynamic_part"},{components:{"slag:built":"slag:sword","slag:material_type":"slag:${material}","slag:part_type":"slag:guard"},count:1,id:"slag:dynamic_part"},{components:{"slag:built":"slag:sword"},count:1,id:"minecraft:stick"}],slag:modular_type="slag:sword"]`;
  else
    return `slag:modular_item[slag:dynamic_parts=[{components:{"slag:built":"slag:${tool}","slag:material_type":"slag:${material}","slag:part_type":"slag:${tp}"},count:1,id:"slag:dynamic_part"},{components:{"slag:built":"slag:${tool}"},count:1,id:"minecraft:stick"}],slag:modular_type="slag:${tool}"]`;
};

const getSlagSword = (materialBlade, materialGuard) => {
  return `slag:modular_item[slag:dynamic_parts=[{components:{"slag:built":"slag:sword","slag:material_type":"slag:${materialBlade}","slag:part_type":"slag:sword_blade"},id:"slag:dynamic_part"},{components:{"slag:built":"slag:sword","slag:material_type":"slag:${materialGuard}","slag:part_type":"slag:guard"},count:1,id:"slag:dynamic_part"},{components:{"slag:built":"slag:sword"},count:1,id:"minecraft:stick"}],slag:modular_type="slag:sword"]`;
};

const getSlagToolIngredient = (tool) => {
  return `slag:modular_item[slag:modular_type="slag:${tool}"]`;
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

  //Early Tools
  createPartRecipes(event, material.stone, "#pioneer:rocks", "#minecraft:stone_crafting_materials");
  createPartRecipes(event, material.flint, "minecraft:flint", getSlagToolIngredient(tool.knife), (r) => {
    r.damageIngredient(getSlagToolIngredient(tool.knife));
  });

  createToolRecipes(event, material.stone);
  createToolRecipes(event, material.flint);
};

/**
 *
 * @param {$RemoveEntriesKubeEvent} event
 */
const slagRemoveEMI = (event) => {
  event.remove("#minecraft:pickaxes");
  event.remove("#minecraft:shovels");
  event.remove("#minecraft:axes");
  event.remove("#minecraft:hoes");
  event.remove("#minecraft:swords");

  const removeMaterials = [
    "wooden",
    "echo",
    "obsidian",
    "emerald",
    "rose_gold",
    "deep_alloy",
    "quartz",
    "lapis",
    "amethyst",
    "bone",
  ];
  const removeTools = ["mattock", "mallet", "prybar", "graip", "hammer", "scythe", "maul", "paxel"];
  const removeArmour = ["helmet", "chestplate", "leggings", "boots"];

  removeMaterials.forEach((rmM) => {
    event.remove(`slag:dynamic_part[slag:material_type="slag:${rmM}"]`);

    Object.entries(tool).forEach(([k, rmT]) => {
      event.remove(slagToolRemoval(rmM, rmT));
    });
    removeTools.forEach((rmT) => {
      event.remove(slagToolRemoval(rmM, rmT));
    });
    removeArmour.forEach((rmA) => {
      event.remove(`slag:modular_item[slag:dynamic_parts=[{components:{"slag:built":"slag:${rmA}","slag:material_type":"slag:${rmM}","slag:part_type":"slag:${rmA}"},count:1,id:"slag:dynamic_part"},{components:{"slag:built":"slag:${rmA}","slag:material_type":"slag:${rmM}","slag:part_type":"slag:plate"},count:1,id:"slag:dynamic_part"}],slag:modular_type="slag:${rmA}"]`);
    });
  });

    removeTools.forEach((rmT) => {
    event.remove(getSlagToolIngredient(rmT));
  });

  
};

/**
 *
 * @param {$AddEntriesKubeEvent} event
 */
const slagAddEMI = (event) => {
  for (const [km, mat] of Object.entries(material)) {
    for (const [ktp, t_prt] of Object.entries(tool_part)) {
      event.add(getSlagPart(mat, t_prt));
    }
    for (const [kt, prt] of Object.entries(tool)) {
      event.add(getSlagTool(mat, prt));
    }
  }
};

/**
 *
 * @param {$RecipesKubeEvent} event
 */
const createToolRecipes = (event, material) => {
  event.shapeless(Item.of(getSlagTool(material, tool.pickaxe)), [
    getSlagPart(material, tool_part.pickaxe),
    "minecraft:stick",
  ]);
  event.shapeless(Item.of(getSlagTool(material, tool.shovel)), [
    getSlagPart(material, tool_part.shovel),
    "minecraft:stick",
  ]);
  event.shapeless(Item.of(getSlagTool(material, tool.axe)), [getSlagPart(material, tool_part.axe), "minecraft:stick"]);
  event.shapeless(Item.of(getSlagTool(material, tool.hoe)), [getSlagPart(material, tool_part.hoe), "minecraft:stick"]);
  event.shapeless(Item.of(getSlagTool(material, tool.sword)), [
    getSlagPart(material, tool_part.sword),
    getSlagPart(material, tool_part.guard),
    "minecraft:stick",
  ]);
};

/**
 *
 * @param {$RecipesKubeEvent} event
 */
const createPartRecipes = (event, material, ingredient, knappingIngredient, processor) => {
  var recipe = [
    event.shaped(getSlagPart(material, tool_part.pickaxe), ["RRR", " C "], {
      R: ingredient,
      C: knappingIngredient,
    }),
    event.shaped(getSlagPart(material, tool_part.shovel), ["R", "C"], {
      R: ingredient,
      C: knappingIngredient,
    }),
    event.shaped(getSlagPart(material, tool_part.axe), ["RR", "RC"], {
      R: ingredient,
      C: knappingIngredient,
    }),
    event.shaped(getSlagPart(material, tool_part.hoe), ["RR", " C"], {
      R: ingredient,
      C: knappingIngredient,
    }),
    event.shaped(getSlagPart(material, tool_part.sword), ["R", "R", "C"], {
      R: ingredient,
      C: knappingIngredient,
    }),
    event.shaped(getSlagPart(material, tool_part.guard), ["RCR"], {
      R: ingredient,
      C: knappingIngredient,
    }),
  ];

  if (processor !== undefined) {
    recipe.forEach((r) => {
      processor(r);
    });
  }
};
