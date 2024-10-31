import { Injectable } from "@nestjs/common";
import { Product } from "src/entities/product.entity";
import { ProductRepository } from "src/repositories/product.repository";
import { DeepPartial } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

@Injectable()
export class ProductService {
  constructor(
    private readonly productRepository: ProductRepository
  ) {};

  async findAll(): Promise<Product[]> {
    return await this.productRepository.findAll();
  };

  async findOne(id: number): Promise<Product | null> {
    return await this.productRepository.findOneById(id);
  };

  async create(productData: DeepPartial<Product>): Promise<Product> {
    return await this.productRepository.createEntity(productData);
  };

  async update(id: number, productData: QueryDeepPartialEntity<Product> ): Promise<Product | null> {
    return await this.productRepository.updateEntity(id, productData);
  };

  async delete(id: number): Promise<void> {
    return await this.productRepository.deleteEntity(id);
  };
};