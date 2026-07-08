const slagUtil = {
  material: {
    stone: "stone",
    flint: "flint",
    copper: "copper",
    iron: "iron",
    gold: "golden",
    diamond: "diamond",
  },

  tool_part: {
    pickaxe: "pickaxe_head",
    shovel: "shovel_head",
    axe: "axe_head",
    hoe: "hoe_head",
    sword: "sword_blade",
    guard: "guard",
    knife: "knife_head",
  },

  tool: {
    pickaxe: "pickaxe",
    shovel: "shovel",
    axe: "axe",
    hoe: "hoe",
    sword: "sword",
    knife: "knife",
  },

  toolRemoval: (material, tool) => {
    const tp = slagUtil.tool_part[tool];
    if (tool === "sword")
      return `slag:modular_item[slag:dynamic_parts=[{components:{"slag:built":"slag:sword","slag:material_type":"slag:${material}","slag:part_type":"slag:sword_blade"},id:"slag:dynamic_part"},{components:{"slag:built":"slag:sword","slag:material_type":"slag:${material}","slag:part_type":"slag:guard"},count:1,id:"slag:dynamic_part"},{components:{"slag:built":"slag:sword"},count:1,id:"minecraft:stick"}],slag:modular_type="slag:sword"]`;
    else if (tool === "knife")
      return `slag:modular_item[slag:dynamic_parts=[{components:{"slag:built":"slag:${tool}","slag:material_type":"slag:${material}","slag:part_type":"slag:${tp}"},count:1,id:"slag:dynamic_part"},{components:{"slag:built":"slag:${tool}"},count:1,id:"minecraft:stick"}],slag:modular_type="slag:${tool}"]`;
    else
      return `slag:modular_item[slag:dynamic_parts=[{components:{"slag:built":"slag:${tool}","slag:material_type":"slag:${material}","slag:part_type":"slag:${tp}"},count:1,id:"slag:dynamic_part"},{components:{"slag:built":"slag:${tool}"},count:2,id:"minecraft:stick"}],slag:modular_type="slag:${tool}"]`;
  },

  getTool: (material, tool) => {
    const tp = slagUtil.tool_part[tool];
    if (tool === "sword")
      return `slag:modular_item[slag:dynamic_parts=[{components:{"slag:built":"slag:sword","slag:material_type":"slag:${material}","slag:part_type":"slag:sword_blade"},id:"slag:dynamic_part"},{components:{"slag:built":"slag:sword","slag:material_type":"slag:${material}","slag:part_type":"slag:guard"},count:1,id:"slag:dynamic_part"},{components:{"slag:built":"slag:sword"},count:1,id:"minecraft:stick"}],slag:modular_type="slag:sword"]`;
    else
      return `slag:modular_item[slag:dynamic_parts=[{components:{"slag:built":"slag:${tool}","slag:material_type":"slag:${material}","slag:part_type":"slag:${tp}"},count:1,id:"slag:dynamic_part"},{components:{"slag:built":"slag:${tool}"},count:1,id:"minecraft:stick"}],slag:modular_type="slag:${tool}"]`;
  },

  getSword: (materialBlade, materialGuard) => {
    return `slag:modular_item[slag:dynamic_parts=[{components:{"slag:built":"slag:sword","slag:material_type":"slag:${materialBlade}","slag:part_type":"slag:sword_blade"},id:"slag:dynamic_part"},{components:{"slag:built":"slag:sword","slag:material_type":"slag:${materialGuard}","slag:part_type":"slag:guard"},count:1,id:"slag:dynamic_part"},{components:{"slag:built":"slag:sword"},count:1,id:"minecraft:stick"}],slag:modular_type="slag:sword"]`;
  },

  getToolIngredient: (tool) => {
    return `slag:modular_item[slag:modular_type="slag:${tool}"]`;
  },

  getPart: (material, tool_part) => {
    return `slag:dynamic_part[slag:material_type="slag:${material}",slag:part_type="slag:${tool_part}"]`;
  },
};
