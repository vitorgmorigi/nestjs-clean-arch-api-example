import { Category } from '../entities/category.entity';

export abstract class CategoryRepository {
  abstract create(category: Category): Promise<void>;
  abstract findAll(): Promise<Category[]>;
  abstract findOne(id: string): Promise<Category>;
}
