import { Product } from "src/entities/product.entity";
import { BaseService } from "./base.service";
import { ProductRepository } from "src/repositories/product.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductService extends BaseService<Product> {
  constructor(
    private readonly productRepostory: ProductRepository
  ) {
    super(productRepostory);
  };
};