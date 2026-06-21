//priority: 1

ServerEvents.tags("item", (event) => {
  minecraftTags(event);
  vibrantJournyTags(event);
});

ServerEvents.recipes((event) => {
  slagRecipes(event);
  minecraftRecipes(event);
});

LootJS.lootTables(event => {
  minecraftLootTables(event);
})