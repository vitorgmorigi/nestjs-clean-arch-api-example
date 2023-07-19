import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { DatabaseModule } from 'src/core/infra/db/database.module';
import { CreateProductUseCase } from 'src/core/application/create-product.use-case';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [CreateProductUseCase],
})
export class ProductsModule {}
