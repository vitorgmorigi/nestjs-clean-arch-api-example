import { Category as PrismaCategory } from '@prisma/client';
import { Category } from '../../../../domain/entities/category.entity';

export class PrismaCategoryMapper {
  public static toDomain(prismaCategory: PrismaCategory): Category {
    return Category.create(
      {
        name: prismaCategory.name,
      },
      prismaCategory.id,
    );
  }

  public static toPrisma(category: Category): PrismaCategory {
    return {
      id: category.id,
      name: category.name,
    };
  }
}
