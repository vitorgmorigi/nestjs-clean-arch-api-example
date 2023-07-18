import {
  Prisma,
  Product as PrismaProduct,
  Category as PrismaCategory,
} from '@prisma/client';
import { Product } from '../../../../domain/entities/product.entity';
import { PrismaCategoryMapper } from './prisma-category.mapper';

export class PrismaProductMapper {
  public static toDomain(
    prismaProduct: PrismaProduct & { category: PrismaCategory },
  ): Product {
    return Product.create(
      {
        name: prismaProduct.name,
        category: PrismaCategoryMapper.toDomain(prismaProduct.category),
        price: prismaProduct.price.toNumber(),
      },
      prismaProduct.id,
    );
  }

  public static toPrisma(product: Product): PrismaProduct {
    return {
      id: product.id,
      name: product.name,
      categoryId: product.category.id,
      price: new Prisma.Decimal(product.price),
    };
  }
}
