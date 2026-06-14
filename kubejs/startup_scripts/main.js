global.pack = {};
global.pack.name = "pioneer"

StartupEvents.registry("item", (event) => {
  registerModPackItems(event);
  registerTools(event);
});
