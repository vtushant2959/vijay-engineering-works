/**
 * Real product photography of Vijay Engineering Works machinery, optimized
 * (resized + JPEG-compressed) into public/products/ from the source files
 * the company provided. Referenced by number (1-32) throughout the data files.
 */

export function productPhoto(n: number): string {
  return `/products/${n}.jpg`;
}

export const factoryVideo = '/videos/factory-machinery.mp4';
