// import { Category } from '../../../../domain/entities/category.entity';
// import { prismaMock } from '../../../../../../prisma-mock';
// import { PrismaCategoryRepository } from './prisma-category.repository';
// import { PrismaService } from '../prisma.service';
// import { randomUUID } from 'crypto';

// describe('PrismaCategoryRepository tests', () => {
//   it('should create new category', async () => {
//     const id = randomUUID();

//     const category: Category = Category.create(
//       {
//         name: 'Testando',
//       },
//       id,
//     );

//     const prismaCategoryRepository = new PrismaCategoryRepository(
//       prismaMock as unknown as PrismaService,
//     );

//     await prismaCategoryRepository.create(category);

//     const createdUser = await prismaCategoryRepository.findOne(id);

//     expect(createdUser).toStrictEqual(category);
//   });
// });
