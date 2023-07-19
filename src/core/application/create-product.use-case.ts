import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../infra/http/nest/products/dto/create-product.dto';
import { Product } from '../domain/entities/product.entity';
import { ProductRepository } from '../domain/repositories/product.repository';
import { CategoryRepository } from '../domain/repositories/category.repository';

@Injectable()
export class CreateProductUseCase {
  constructor(
    private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository,
  ) {}

  async execute(data: CreateProductDto): Promise<Product> {
    const category = await this.categoryRepository.findOne(data.categoryId);

    const product = Product.create({
      name: data.name,
      price: data.price,
      category,
    });

    await this.productRepository.create(product);

    return product;
  }
}
