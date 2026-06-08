// priority: 0
import { Item } from "@side-only/startup/events/registry";

/**
 * 
 * @param {Item} event 
 */
const registerModPackItems = (event) => {
  event.create(global.pack.items.example_item);
};
