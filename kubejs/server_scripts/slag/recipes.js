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
  event.remove({ output: "#c:knifes" });

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
    global.pack.items.straw_binding,
  ]);
  event.shapeless(Item.of(slagUtil.getTool(material, slagUtil.tool.shovel)), [
    slagUtil.getPart(material, slagUtil.tool_part.shovel),
    "minecraft:stick",
    global.pack.items.straw_binding,
  ]);
  event.shapeless(Item.of(slagUtil.getTool(material, slagUtil.tool.axe)), [
    slagUtil.getPart(material, slagUtil.tool_part.axe),
    "minecraft:stick",
    global.pack.items.straw_binding,
  ]);
  event.shapeless(Item.of(slagUtil.getTool(material, slagUtil.tool.hoe)), [
    slagUtil.getPart(material, slagUtil.tool_part.hoe),
    "minecraft:stick",
    global.pack.items.straw_binding,
  ]);
  event.shapeless(Item.of(slagUtil.getTool(material, slagUtil.tool.sword)), [
    slagUtil.getPart(material, slagUtil.tool_part.sword),
    slagUtil.getPart(material, slagUtil.tool_part.guard),
    "minecraft:stick",
    global.pack.items.straw_binding,
  ]);
  event.shapeless(Item.of(slagUtil.getTool(material, slagUtil.tool.knife)), [
    slagUtil.getPart(material, slagUtil.tool_part.knife),
    "minecraft:stick",
  ]);
};
