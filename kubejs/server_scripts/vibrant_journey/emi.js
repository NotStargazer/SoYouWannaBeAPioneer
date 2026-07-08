import { $AddEntriesKubeEvent, $RemoveEntriesKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe/viewer";

/**
 *
 * @param {$RemoveEntriesKubeEvent} event
 */
const vibrantJourneyRemoveEMI = (event) => {
  const mod = "projectvibrantjourneys";
  event.remove(`${mod}:ferrous_gravel`);
  event.remove(`${mod}:gilded_gravel`);
  event.remove(`${mod}:gilded_red_sand`);
};
