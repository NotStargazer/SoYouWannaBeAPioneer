//priority: 1

ServerEvents.tags('item', event => {
    vibrantJournyTags(event);
})

ServerEvents.recipes(event => {
    slagRecipes(event);
})