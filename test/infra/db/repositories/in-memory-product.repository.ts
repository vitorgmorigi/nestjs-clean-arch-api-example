import { ProductRepository } from '../../../../src/core/domain/repositories/product.repository';
import { Injectable } from '@nestjs/common';
import { Product } from '../../../../src/core/domain/entities/product.entity';

@Injectable()
export class InMemoryProductRepository implements ProductRepository {
  public products: Product[] = [];

  async create(product: Product): Promise<void> {
    this.products.push(product);
  }
  async findAll(): Promise<Product[]> {
    return this.products;
  }
  async findOne(id: string): Promise<Product> {
    return this.products.find((product) => product.id === id);
  }
}
