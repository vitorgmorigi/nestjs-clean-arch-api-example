import { Category } from '../../../../src/core/domain/entities/category.entity';
import { CategoryRepository } from '../../../../src/core/domain/repositories/category.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InMemoryCategoryRepository implements CategoryRepository {
  public categories: Category[] = [];

  async create(category: Category): Promise<void> {
    this.categories.push(category);
  }
  async findAll(): Promise<Category[]> {
    return this.categories;
  }
  async findOne(id: string): Promise<Category> {
    return this.categories.find((category) => category.id === id);
  }
}
