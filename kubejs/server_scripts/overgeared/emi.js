import { $AddEntriesKubeEvent, $RemoveEntriesKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe/viewer";

/**
 *
 * @param {$RemoveEntriesKubeEvent} event
 */
const overgearedRemoveEMI = (event) => {
    event.remove("overgeared:knappable_rock")
    event.remove("#overgeared:tool_parts")
};
