// priority: 0
import { tags } from "@package/net/minecraft";
import { Item } from "@side-only/startup/events/registry";

/**
 *
 * @param {Item} event
 */
const registerModPackItems = (event) => {
  event.create(global.pack.items.straw_binding);

  /**
   *
   * @param {import('../types').Metal} material
   */
  const addMetal = (material) => {
    //items
    const items = {
      ingot: { suffix: "ingot" },
      nugget: { suffix: "nugget" },
      sheet: { suffix: "sheet", tagGroup: "plates" },
      rod: { suffix: "rod", tags: ["c:rods/allmetal"] },
      wire: { suffix: "wire" },
      gear: { suffix: "gear" },
      dust: { suffix: "dust" },
      dirtyDust: { prefix: "dirty", suffix: "dust", tagGroup: "dirty_dusts" },
      raw: { prefix: "raw", tagGroup: "raw_materials" },
      crushed: { prefix: "crushed_raw", tagGroup: "clumps", tags: ["create:crushed_raw_materials"] },
    };

    for (const [item, properties] of Object.entries(items)) {
      if (material.items == undefined || material.items[item]) {
        // if i use const in here then i get redecleration errors???
        let itemName = [properties.prefix, material.name, properties.suffix].filter((part) => part != null).join("_");

        // tags, group defaults to plural of key
        let tagGroup = `c:${properties.tagGroup ?? `${item}s`}`;
        let tags = [tagGroup, `${tagGroup}/${material.name}`].concat(properties.tags ?? []);

        console.debug(`Adding ${itemName}`);
        event.create(`${global.pack.name}:${itemName}`).tag(tags);
      }
    }
  };

  global.pack.metals.forEach(addMetal);
};
