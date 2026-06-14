global.pack.items = defineNames(["example_item"]);

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
