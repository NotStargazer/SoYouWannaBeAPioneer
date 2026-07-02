// priority: 0
import { $KubeDataGenerator } from "@package/dev/latvian/mods/kubejs/generator";
import { $RecipesKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe";

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
  createPartRecipes(event, slagUtil.material.stone, "#pioneer:rocks", "#minecraft:stone_crafting_materials");
  createPartRecipes(event, slagUtil.material.flint, "minecraft:flint", slagUtil.getToolIngredient(slagUtil.tool.knife), (r) => {
    r.damageIngredient(slagUtil.getToolIngredient(slagUtil.tool.knife));
  });

  event.shapeless(slagUtil.getPart(slagUtil.material.flint, slagUtil.tool_part.knife), ["minecraft:flint", "#pioneer:rocks"]);

  createToolRecipes(event, slagUtil.material.stone);
  createToolRecipes(event, slagUtil.material.flint);
};

/**
 *
 * @param {$RecipesKubeEvent} event
 */
const createToolRecipes = (event, material) => {
  event.shapeless(Item.of(slagUtil.getTool(material, slagUtil.tool.pickaxe)), [
    slagUtil.getPart(material, slagUtil.tool_part.pickaxe),
    "minecraft:stick",
  ]);
  event.shapeless(Item.of(slagUtil.getTool(material, slagUtil.tool.shovel)), [
    slagUtil.getPart(material, slagUtil.tool_part.shovel),
    "minecraft:stick",
  ]);
  event.shapeless(Item.of(slagUtil.getTool(material, slagUtil.tool.axe)), [slagUtil.getPart(material, slagUtil.tool_part.axe), "minecraft:stick"]);
  event.shapeless(Item.of(slagUtil.getTool(material, slagUtil.tool.hoe)), [slagUtil.getPart(material, slagUtil.tool_part.hoe), "minecraft:stick"]);
  event.shapeless(Item.of(slagUtil.getTool(material, slagUtil.tool.sword)), [
    slagUtil.getPart(material, slagUtil.tool_part.sword),
    slagUtil.getPart(material, slagUtil.tool_part.guard),
    "minecraft:stick",
  ]);
  event.shapeless(Item.of(slagUtil.getTool(material, slagUtil.tool.knife)), [
    slagUtil.getPart(material, slagUtil.tool_part.knife),
    "minecraft:stick",
  ]);
};

/**
 *
 * @param {$RecipesKubeEvent} event
 */
const createPartRecipes = (event, material, ingredient, knappingIngredient, processor) => {
  var recipe = [
    event.shaped(slagUtil.getPart(material, slagUtil.tool_part.pickaxe), ["RRR", " C "], {
      R: ingredient,
      C: knappingIngredient,
    }),
    event.shaped(slagUtil.getPart(material, slagUtil.tool_part.shovel), ["R", "C"], {
      R: ingredient,
      C: knappingIngredient,
    }),
    event.shaped(slagUtil.getPart(material, slagUtil.tool_part.axe), ["RR", "RC"], {
      R: ingredient,
      C: knappingIngredient,
    }),
    event.shaped(slagUtil.getPart(material, slagUtil.tool_part.hoe), ["RR", " C"], {
      R: ingredient,
      C: knappingIngredient,
    }),
    event.shaped(slagUtil.getPart(material, slagUtil.tool_part.sword), ["R", "R", "C"], {
      R: ingredient,
      C: knappingIngredient,
    }),
    event.shaped(slagUtil.getPart(material, slagUtil.tool_part.guard), ["RCR"], {
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