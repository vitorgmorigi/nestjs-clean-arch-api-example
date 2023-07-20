import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from '../../db/database.module';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';
import { PrismaService } from '../../db/prisma/prisma.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule, ProductsModule, CategoryModule],
      controllers: [AppController],
      providers: [AppService, PrismaService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
