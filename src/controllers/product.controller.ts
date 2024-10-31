import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from "src/entities/product.entity";
import { ProductService } from "src/services/product.service";

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {};

  @Get()
  findAll() {
    return this.productService.findAll();
  };

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productService.findOneById(id);
  };

  @Post()
  create(@Body() product: Product) {
    return this.productService.create(product);
  };

  @Put(':id')
  update(@Param('id') id: number, @Body() product: Product) {
    return this.productService.update(id, product);
  };

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.delete(id);
  };
};