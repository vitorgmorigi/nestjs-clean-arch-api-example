import { Test, TestingModule } from '@nestjs/testing';
import { CategoryController } from './category.controller';
import { DatabaseModule } from '../../../../../../src/core/infra/db/database.module';
import { CreateCategoryUseCase } from '../../../../../../src/core/application/create-category.use-case';

describe('CategoryController', () => {
  let controller: CategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [CategoryController],
      providers: [CreateCategoryUseCase],
    }).compile();

    controller = module.get<CategoryController>(CategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
