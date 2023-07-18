import { Category } from './category.entity';
import { Product } from './product.entity';

describe('Product Entity tests', () => {
  it('should create a product', () => {
    const category = Category.create({ name: 'Eletrodomésticos' });

    const product = Product.create({
      name: 'Geladeira',
      category,
      price: 4000,
    });

    expect(product.id).not.toBeUndefined();
    expect(product.name).toBe('Geladeira');
  });

  it('should update a product name', () => {
    const category = Category.create({
      name: 'Eletrônicos',
    });

    const product = Product.create({
      name: 'iPhone 13',
      category,
      price: 4000,
    });

    product.updateName('iPhone 14');

    expect(product.id).not.toBeUndefined();
    expect(product.name).toBe('iPhone 14');
  });

  it('should update a product price', () => {
    const category = Category.create({
      name: 'Eletrônicos',
    });

    const product = Product.create({
      name: 'iPhone 13',
      category,
      price: 4000,
    });

    product.updatePrice(3000);

    expect(product.id).not.toBeUndefined();
    expect(product.price).toBe(3000);
  });
});
