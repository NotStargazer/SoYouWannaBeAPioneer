//priority: 1

RecipeViewerEvents.addEntries("item", (event) => {
  slagAddEMI(event);
});

RecipeViewerEvents.removeEntries("item", (event) => {
  slagRemoveEMI(event);
});

ServerEvents.recipes((event) => {
  slagRecipes(event);
  overgearedRecipes(event);
  minecraftRecipes(event);
});


ServerEvents.tags("item", (event) => {
  vibrantJournyItemTags(event);
});

ServerEvents.tags("block", (event) => {
  vibrantJournyBlockTags(event);
});

LootJS.lootTables(event => {
  minecraftLootTables(event);
})
