import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { DatabaseModule } from '../../../db/database.module';
import { CreateProductUseCase } from '../../../../application/create-product.use-case';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [CreateProductUseCase],
})
export class ProductsModule {}
