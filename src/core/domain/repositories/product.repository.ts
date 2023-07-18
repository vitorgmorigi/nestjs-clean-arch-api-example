import { Product } from '../entities/product.entity';

export abstract class ProductRepository {
  abstract create(product: Product): Promise<void>;
  abstract findAll(): Promise<Product[]>;
  abstract findOne(id: string): Promise<Product>;
}
