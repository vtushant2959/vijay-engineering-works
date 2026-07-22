import { products, categories } from './products';

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const galleryItems: GalleryItem[] = products.flatMap((product) =>
  product.images.map((image, index) => {
    const category = categories.find((c) => c.id === product.categoryId)!;
    return {
      id: `${product.slug}-${index}`,
      title: product.name,
      category: category.name,
      image,
    };
  })
);

export const galleryCategories = ['All', ...categories.map((c) => c.name)];
