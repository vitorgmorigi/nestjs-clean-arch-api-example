import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from '../nest/products/products.module';
import { PrismaService } from '../../db/prisma/prisma.service';
import { CategoryModule } from '../nest/category/category.module';
import { DatabaseModule } from '../../db/database.module';

@Module({
  imports: [DatabaseModule, ProductsModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
