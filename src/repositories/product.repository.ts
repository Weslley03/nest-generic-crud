import { Injectable } from "@nestjs/common";
import { BaseRepository } from "./base.repository";
import { Product } from "src/entities/product.entity";
import { EntityManager } from "typeorm";

@Injectable()
export class ProductRepository extends BaseRepository<Product> {
  constructor(manager: EntityManager) {
    super(Product, manager)
  };
};