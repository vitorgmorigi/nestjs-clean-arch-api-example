import { InMemoryCategoryRepository } from '../../../test/infra/db/repositories/in-memory-category.repository';
import { InMemoryProductRepository } from '../../../test/infra/db/repositories/in-memory-product.repository';
import { Category } from '../domain/entities/category.entity';
import { CreateProductUseCase } from './create-product.use-case';

describe('CreateProductUseCase tests', () => {
  it('should NOT create a product when category does not exists', async () => {
    const inMemoryProductRepository = new InMemoryProductRepository();
    const inMemoryCategoryRepository = new InMemoryCategoryRepository();

    const createProductUseCase = new CreateProductUseCase(
      inMemoryProductRepository,
      inMemoryCategoryRepository,
    );

    await expect(
      createProductUseCase.execute({
        name: 'Lampada',
        categoryId: '1',
        price: 10,
      }),
    ).rejects.toThrow();
  });
  it('should create a product when category exists', async () => {
    const inMemoryProductRepository = new InMemoryProductRepository();
    const inMemoryCategoryRepository = new InMemoryCategoryRepository();

    inMemoryCategoryRepository.create(
      Category.create(
        {
          name: 'Utensílios domésticos',
        },
        '2',
      ),
    );

    const createProductUseCase = new CreateProductUseCase(
      inMemoryProductRepository,
      inMemoryCategoryRepository,
    );

    await expect(
      createProductUseCase.execute({
        name: 'Lampada',
        categoryId: '2',
        price: 10,
      }),
    ).resolves.not.toThrow();

    expect(inMemoryProductRepository.products[0].name).toBe('Lampada');
  });
});
