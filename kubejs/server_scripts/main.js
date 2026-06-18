//priority: 1

ServerEvents.tags("item", (event) => {
  event.add()
  minecraftTags(event);
  vibrantJournyTags(event);
});

ServerEvents.recipes((event) => {
  slagRecipes(event);
});