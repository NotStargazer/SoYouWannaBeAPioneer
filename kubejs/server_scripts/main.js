//priority: 1

RecipeViewerEvents.addEntries("item", (event) => {
  slagAddEMI(event);
});

RecipeViewerEvents.removeEntries("item", (event) => {
  slagRemoveEMI(event);
});

ServerEvents.recipes((event) => {
  slagRecipes(event);
  minecraftRecipes(event);
});


ServerEvents.tags("item", (event) => {
  minecraftTags(event);
  vibrantJournyTags(event);
});

LootJS.lootTables(event => {
  minecraftLootTables(event);
})
