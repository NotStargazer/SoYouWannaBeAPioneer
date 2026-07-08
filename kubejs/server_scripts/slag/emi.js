import { $AddEntriesKubeEvent, $RemoveEntriesKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe/viewer";

const removeMaterials = [
  "wooden",
  "echo",
  "obsidian",
  "emerald",
  "rose_gold",
  "deep_alloy",
  "quartz",
  "lapis",
  "amethyst",
  "bone",
  "netherite",
];

const removeTools = ["mattock", "mallet", "prybar", "graip", "hammer", "scythe", "maul", "paxel"];
const removeBuiltIn = ["pickaxe", "shovel", "axe", "hoe"];
const removeArmour = ["helmet", "chestplate", "leggings", "boots"];

const replaceTools = ["pickaxe", "shovel", "axe", "hoe"];

/**
 *
 * @param {$RemoveEntriesKubeEvent} event
 */
const slagRemoveEMI = (event) => {
  event.remove("#minecraft:pickaxes");
  event.remove("#minecraft:shovels");
  event.remove("#minecraft:axes");
  event.remove("#minecraft:hoes");
  event.remove("#minecraft:swords");

  removeMaterials.forEach((material) => {
    event.remove(`slag:dynamic_part[slag:material_type="slag:${material}"]`);

    //Removing tools for materials we don't want.
    Object.entries(slagUtil.tool).forEach(([k, tool]) => {
      event.remove(slagUtil.toolRemoval(material, tool));
    });
    //Removing armours for materials we don't want.
    removeArmour.forEach((rmA) => {
      event.remove(
        `slag:modular_item[slag:dynamic_parts=[{components:{"slag:built":"slag:${rmA}","slag:material_type":"slag:${material}","slag:part_type":"slag:${rmA}"},count:1,id:"slag:dynamic_part"},{components:{"slag:built":"slag:${rmA}","slag:material_type":"slag:${material}","slag:part_type":"slag:plate"},count:1,id:"slag:dynamic_part"}],slag:modular_type="slag:${rmA}"]`,
      );
    });
  });

  //Removing default implementation of tools
  Object.entries(slagUtil.material).forEach(([k, material]) => {
    removeBuiltIn.forEach((tool) => {
      event.remove(slagUtil.toolRemoval(material, tool));
    });
  });

  //Removing tools we don't want in general.
  removeTools.forEach((tool) => {
    event.remove(slagUtil.getToolIngredient(tool));
  });
};

/**
 *
 * @param {$AddEntriesKubeEvent} event
 */
const slagAddEMI = (event) => {
  Object.entries(slagUtil.material).forEach(([k, material]) => {
    replaceTools.forEach((tool) => {
      console.info("ADDING TOOL: " + tool)
      if(tool === "sword")
        event.add(slagUtil.getSword(material, material))
      else
        event.add(slagUtil.getTool(material, tool));
    });
  });
};