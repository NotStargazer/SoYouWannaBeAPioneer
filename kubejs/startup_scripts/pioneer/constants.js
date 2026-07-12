global.pack.items = defineNames(["straw_binding"]);

/**
 * @type {import('../types').Metal[]}
 */
global.pack.metals = [
  { name: "tin", requireTier: "stone" },
  {
    name: "steel",
    requireTier: "iron",
    items: {
      rod: true,
    },
    blocks: {},
  },
];

/**
 * @type {import('../types').defineNames}
 */
function defineNames(names) {
  const result = Object.create(null);
  for (const name of names) {
    result[name] = `${global.pack.name}:${name}`;
  }
  return result;
}
