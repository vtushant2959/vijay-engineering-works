/**
 * Curated pool of free-to-use, commercially-licensed Pexels photos
 * (https://www.pexels.com/license/ — free for commercial use, no attribution required).
 * Grouped by theme so each page/product can draw distinct, relevant images
 * instead of reusing the same one or two photos everywhere.
 */

export function pexels(id: number, width = 800): string {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

export const machineryImages = [
  18569750, 28929513, 15603045, 27348524, 12951632, 28929545, 8956445,
  18341389, 18569745, 7254410, 16745679, 8865187, 36311187, 36311180,
  31352672, 36522038, 28929510, 7480243, 11951233, 4225118, 14804699,
  11765538, 37443508, 13524733, 13524735, 13524876, 13524778,
];

export const factoryImages = [
  33626643, 34718930, 34207364, 34718922, 30335445, 31091544, 23232388,
  34011407, 28572048, 38389968, 30335372, 30335400,
];

export const stitchingImages = [16430929, 31212954];

export const leatherImages = [
  5894234, 5894220, 5894244, 5894161, 5894159, 33495913, 33428311, 4173289,
  4452603, 4452619, 4452610, 4452611, 4452508, 37326769, 5963058, 5963132,
  5963131, 5963186, 5962631, 37443512, 33428318, 9361477, 6653222,
];

export const footwearImages = [
  11324518, 11324548, 11324546, 1456733, 2547007, 7857501, 7857494,
  18375077, 18380066, 1020372, 27008318, 13807630, 28271086, 26852497,
  12628400, 9853347, 7289729, 7289740, 7289746, 31688978, 7916058,
  5771898, 8764342, 2331069,
];

export const warehouseImages = [
  13974251, 5505172, 14601101, 5878442, 2889193, 1267338, 1267329,
  4480797, 5505861, 10039994, 1087083,
];

function pick(pool: number[], index: number, width = 800): string {
  return pexels(pool[index % pool.length], width);
}

export { pick };
