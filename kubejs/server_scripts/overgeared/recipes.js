// priority: 0
import { $RecipesKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe";
import { event } from "@package/org/slf4j";

const knapping_patterns = {
  pickaxe: [" x ", "x x"],
  shovel: ["xx", "xx"],
  axe: ["xxx", "xx "],
  hoe: [" xx", "x  "],
  sword: ["x", "x", "x"],
  guard: ["xxx", " x "],
  knife: [" x", "x "],
};

/**
 *
 * @param {$RecipesKubeEvent} event
 */
const overgearedRecipes = (event) => {
    createPartRecipes(event, slagUtil.material.stone, `#${global.pack.name}:rocks`);
    createPartRecipes(event, slagUtil.material.flint, `minecraft:flint`);
};

/**
 *
 * @param {$RecipesKubeEvent} event
 */
const createPartRecipes = (event, material, ingredient) => {
  Object.entries(knapping_patterns).forEach(([key, pattern]) => {
    event.custom(
      overgearedUtil.knappingRecipe(
        Item.of(slagUtil.getPart(material, slagUtil.tool_part[key])),
        ingredient,
        pattern,
      ),
    );
  });
};
