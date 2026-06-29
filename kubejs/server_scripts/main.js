//priority: 1

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
