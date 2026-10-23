import { Injectable, NotFoundException } from '@nestjs/common';
import { CATEGORIES, Category, Product } from './catalog.data.js';

@Injectable()
export class CatalogService {
  findAll(): Category[] {
    return CATEGORIES;
  }

  findOne(slug: string): Category {
    const category = CATEGORIES.find((c) => c.slug === slug);
    if (!category) throw new NotFoundException(`Category "${slug}" not found`);
    return category;
  }

  findProduct(id: string): { product: Product; category: Omit<Category, 'products'>; related: Product[] } {
    for (const { products, ...category } of CATEGORIES) {
      const product = products.find((x) => x.id === id);
      if (product) {
        const related = products.filter((x) => x.id !== id).slice(0, 4);
        return { product, category, related };
      }
    }
    throw new NotFoundException(`Product "${id}" not found`);
  }
}
