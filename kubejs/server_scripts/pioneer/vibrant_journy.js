// priority: 0
import { $Item } from "@package/net/minecraft/world/item";
import { TagEvent } from "@side-only/server/events";

/**
 * 
 * @param {TagEvent<$Item>} event 
 */
const vibrantJournyTags = (event) => {
    event.add('pioneer:rocks', 
        [
            'projectvibrantjourneys:rocks',
            'projectvibrantjourneys:mossy_rocks',
            'projectvibrantjourneys:sandstone_rocks',
            'projectvibrantjourneys:red_sandstone_rocks',
        ]);
}