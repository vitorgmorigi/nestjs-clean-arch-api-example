import { Category } from './category.entity';

describe('Category Entity tests', () => {
  it('should create a category', () => {
    const category = Category.create({
      name: 'Eletrodomésticos',
    });

    expect(category.id).not.toBeUndefined();
    expect(category.name).toBe('Eletrodomésticos');
  });

  it('should update a category name', () => {
    const category = Category.create({
      name: 'Eletrodomésticos',
    });

    category.updateName('Eletrônicos');

    expect(category.id).not.toBeUndefined();
    expect(category.name).toBe('Eletrônicos');
  });
});
