import { Injectable } from '@nestjs/common';
import { Category } from '../domain/entities/category.entity';
import { CategoryRepository } from '../domain/repositories/category.repository';
import { CreateCategoryDto } from '../infra/http/nest/category/dto/create-category.dto';

@Injectable()
export class CreateCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(data: CreateCategoryDto): Promise<Category> {
    const category = Category.create({
      name: data.name,
    });

    await this.categoryRepository.create(category);

    return category;
  }
}
