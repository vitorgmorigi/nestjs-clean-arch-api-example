import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../../../domain/repositories/product.repository';
import { Product } from '../../../../domain/entities/product.entity';
import { PrismaProductMapper } from '../mappers/prisma-product.mapper';

@Injectable()
export class PrismaProductRepository implements ProductRepository {
  constructor(private prisma: PrismaService) {}

  async create(product: Product): Promise<void> {
    await this.prisma.product.create({
      data: PrismaProductMapper.toPrisma(product),
    });
  }
  async findAll(): Promise<Product[]> {
    const product = await this.prisma.product.findMany({
      include: {
        category: true,
      },
    });

    return product.map(PrismaProductMapper.toDomain);
  }
  async findOne(id: string): Promise<Product> {
    const product = await this.prisma.product.findFirst({
      where: {
        id,
      },
      include: {
        category: true,
      },
    });

    return PrismaProductMapper.toDomain(product);
  }
}
