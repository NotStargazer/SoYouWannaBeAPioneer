import { $AddEntriesKubeEvent, $RemoveEntriesKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe/viewer";

/**
 *
 * @param {$RemoveEntriesKubeEvent} event
 */
const farmersRemoveEMI = (event) => {
  event.remove("#c:tools/knife");
};
