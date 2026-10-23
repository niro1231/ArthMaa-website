import { Controller, Get, Param } from '@nestjs/common';
import { CatalogService } from './catalog.service.js';

@Controller()
export class CatalogController {
  constructor(private readonly catalog: CatalogService) {}

  @Get('categories')
  findAll() {
    return this.catalog.findAll();
  }

  @Get('categories/:slug')
  findOne(@Param('slug') slug: string) {
    return this.catalog.findOne(slug);
  }

  @Get('products/:id')
  findProduct(@Param('id') id: string) {
    return this.catalog.findProduct(id);
  }
}
