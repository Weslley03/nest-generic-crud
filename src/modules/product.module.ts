import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductController } from "src/controllers/product.controller";
import { Product } from "src/entities/product.entity";
import { ProductRepository } from "src/repositories/product.repository";
import { ProductService } from "src/services/product.service";

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
  exports: [ProductService],
})

export class ProductModule {};