import { Module } from '@nestjs/common';

import { PrismaService } from '../db/prisma/prisma.service';
import { CategoryRepository } from 'src/core/domain/repositories/category.repository';
import { PrismaCategoryRepository } from '../db/prisma/repositories/prisma-category.repository';
import { ProductRepository } from 'src/core/domain/repositories/product.repository';
import { PrismaProductRepository } from './prisma/repositories/prisma-product.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: CategoryRepository,
      useClass: PrismaCategoryRepository,
    },
    {
      provide: ProductRepository,
      useClass: PrismaProductRepository,
    },
  ],
  exports: [
    {
      provide: CategoryRepository,
      useClass: PrismaCategoryRepository,
    },
    {
      provide: ProductRepository,
      useClass: PrismaProductRepository,
    },
  ],
})
export class DatabaseModule {}
