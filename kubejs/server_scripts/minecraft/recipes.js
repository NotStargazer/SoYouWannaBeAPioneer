import { $RecipesKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe";

/**
 *
 * @param {$RecipesKubeEvent} event
 */
const minecraftRecipes = (event) => {
    event.shaped("minecraft:string", ["SS", "SS"], {
        S: "createaddition:straw"
    });
}