//priority: 1

RecipeViewerEvents.addEntries("item", (event) => {
  slagAddEMI(event);
});

RecipeViewerEvents.removeEntries("item", (event) => {
  slagRemoveEMI(event);
  farmersRemoveEMI(event);
});

ServerEvents.recipes((event) => {
  slagRecipes(event);
  overgearedRecipes(event);
  minecraftRecipes(event);
  farmersRecipes(event);
});


ServerEvents.tags("item", (event) => {
  vibrantJournyItemTags(event);
  tfmgItemTags(event);
});

ServerEvents.tags("block", (event) => {
  vibrantJournyBlockTags(event);
});

LootJS.lootTables(event => {
  minecraftLootTables(event);
})
