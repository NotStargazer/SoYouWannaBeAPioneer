// priority: 0
import { $RecipesKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe";

/**
 *
 * @param {$RecipesKubeEvent} event
 */
const farmersRecipes = (event) => {
  event.remove({ output: "#c:tools/knife" });
  event
    .shapeless(global.pack.items.straw_binding, [
      "farmersdelight:straw",
      "farmersdelight:straw",
      "farmersdelight:straw",
      slagUtil.getToolIngredient(slagUtil.tool.knife),
    ])
    .damageIngredient(slagUtil.getToolIngredient(slagUtil.tool.knife));
};
