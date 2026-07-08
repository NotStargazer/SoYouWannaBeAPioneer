//priority: 1

RecipeViewerEvents.addEntries("item", (event) => {
  slagAddEMI(event);
});

RecipeViewerEvents.removeEntries("item", (event) => {
  slagRemoveEMI(event);
  farmersRemoveEMI(event);
  overgearedRemoveEMI(event);
});

ServerEvents.recipes((event) => {
  slagRecipes(event);
  overgearedRecipes(event);
  minecraftRecipes(event);
  farmersRecipes(event);
});

ServerEvents.tags("item", (event) => {
  vibrantJourneyItemTags(event);
  overgearedItemTags(event);
  tfmgItemTags(event);
});

ServerEvents.tags("block", (event) => {
  vibrantJourneyBlockTags(event);
});

LootJS.lootTables((event) => {
  minecraftLootTables(event);
});
