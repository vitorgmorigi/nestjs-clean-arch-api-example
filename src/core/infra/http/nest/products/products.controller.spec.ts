import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { DatabaseModule } from '../../../db/database.module';
import { CreateProductUseCase } from '../../../../application/create-product.use-case';

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [ProductsController],
      providers: [CreateProductUseCase],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
