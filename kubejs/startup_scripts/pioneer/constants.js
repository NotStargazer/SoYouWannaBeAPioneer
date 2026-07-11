global.pack.items = defineNames(["straw_binding"]);

/**
 * @type {import('../types').Metal[]}
 */
global.pack.metals = [
  {
    name: "tin",
  },
  {
    name: "steel",
    items: {
      rod: true,
    },
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
