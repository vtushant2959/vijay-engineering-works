import { machineryImages, factoryImages, leatherImages, stitchingImages, warehouseImages, pexels } from './images';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Machinery' | 'Factory Floor' | 'Craftsmanship' | 'Logistics';
  image: string;
}

function buildSet(ids: number[], category: GalleryItem['category'], prefix: string): GalleryItem[] {
  return ids.map((id, index) => ({
    id: `${prefix}-${index}`,
    title: `${category} ${index + 1}`,
    category,
    image: pexels(id, 900),
  }));
}

export const galleryItems: GalleryItem[] = [
  ...buildSet(machineryImages.slice(0, 8), 'Machinery', 'machinery'),
  ...buildSet(factoryImages.slice(0, 6), 'Factory Floor', 'factory'),
  ...buildSet([...leatherImages.slice(0, 6), ...stitchingImages], 'Craftsmanship', 'craft'),
  ...buildSet(warehouseImages.slice(0, 5), 'Logistics', 'logistics'),
];

export const galleryCategories = ['All', 'Machinery', 'Factory Floor', 'Craftsmanship', 'Logistics'] as const;
