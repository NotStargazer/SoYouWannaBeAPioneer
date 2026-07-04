// priority: 0
import { $RecipesKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe";

/**
 * 
 * @param {$RecipesKubeEvent} event
 */
const overgearedRecipes = (event) => {
    event.custom(overgearedUtil.knappingRecipe(
        Item.of(slagUtil.getPart(slagUtil.material.stone, slagUtil.tool_part.pickaxe)),
        "#pioneer:rocks",
        [" x ", "x x"]));
    event.custom(overgearedUtil.knappingRecipe(
        Item.of(slagUtil.getPart(slagUtil.material.stone, slagUtil.tool_part.shovel)),
        "#pioneer:rocks",
        ["xx", "xx"]));
    event.custom(overgearedUtil.knappingRecipe(
        Item.of(slagUtil.getPart(slagUtil.material.stone, slagUtil.tool_part.axe)),
        "#pioneer:rocks",
        ["xxx", "xx "]));
    event.custom(overgearedUtil.knappingRecipe(
        Item.of(slagUtil.getPart(slagUtil.material.stone, slagUtil.tool_part.hoe)),
        "#pioneer:rocks",
        [" xx", "x  "]));
    event.custom(overgearedUtil.knappingRecipe(
        Item.of(slagUtil.getPart(slagUtil.material.stone, slagUtil.tool_part.sword)),
        "#pioneer:rocks",
        ["x", "x", "x"]));
    event.custom(overgearedUtil.knappingRecipe(
        Item.of(slagUtil.getPart(slagUtil.material.stone, slagUtil.tool_part.guard)),
        "#pioneer:rocks",
        ["xxx", " x "]));
    event.custom(overgearedUtil.knappingRecipe(
        Item.of(slagUtil.getPart(slagUtil.material.stone, slagUtil.tool_part.knife)),
        "#pioneer:rocks",
        [" x", "x "]));
}