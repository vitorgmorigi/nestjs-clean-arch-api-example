import { InMemoryCategoryRepository } from '../../../test/infra/db/repositories/in-memory-category.repository';
import { CreateCategoryUseCase } from './create-category.use-case';

describe('CreateCategoryUseCase tests', () => {
  it('should create new category', async () => {
    const inMemoryCategoryRepository = new InMemoryCategoryRepository();

    const createCategoryUseCase = new CreateCategoryUseCase(
      inMemoryCategoryRepository,
    );

    await expect(
      createCategoryUseCase.execute({
        name: 'Categoria teste',
      }),
    ).resolves.not.toThrow();

    expect(inMemoryCategoryRepository.categories[0].name).toBe(
      'Categoria teste',
    );
  });
});
