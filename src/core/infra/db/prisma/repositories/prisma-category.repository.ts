import { Category } from '../../../../domain/entities/category.entity';
import { CategoryRepository } from '../../../../domain/repositories/category.repository';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { PrismaCategoryMapper } from '../mappers/prisma-category.mapper';

@Injectable()
export class PrismaCategoryRepository implements CategoryRepository {
  constructor(private prisma: PrismaService) {}

  async create(category: Category): Promise<void> {
    await this.prisma.category.create({
      data: PrismaCategoryMapper.toPrisma(category),
    });
  }
  async findAll(): Promise<Category[]> {
    const categories = await this.prisma.category.findMany();

    return categories.map(PrismaCategoryMapper.toDomain);
  }
  async findOne(id: string): Promise<Category> {
    const category = await this.prisma.category.findUnique({
      where: {
        id,
      },
    });

    return PrismaCategoryMapper.toDomain(category);
  }
}
