const overgearedUtil = {
  /**
   *
   * @param {$ItemStack | String} result
   * @param {$Ingredient | String} ingredient
   * @param {Array<String>} pattern
   * @returns {object}
   */
  knappingRecipe: (result, ingredient, pattern) => {
    return {
      type: "overgeared:rock_knapping",
      pattern: pattern,
      ingredient: typeof(ingredient) === "string" ? Ingredient.of(ingredient) : ingredient,
      result: typeof(result) === "string" ? Ingredient.of(result) : result,
      show_notification: true,
    }
  },
};
