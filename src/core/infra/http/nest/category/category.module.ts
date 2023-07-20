import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CreateCategoryUseCase } from '../../../../application/create-category.use-case';
import { DatabaseModule } from '../../../db/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoryController],
  providers: [CreateCategoryUseCase],
})
export class CategoryModule {}
