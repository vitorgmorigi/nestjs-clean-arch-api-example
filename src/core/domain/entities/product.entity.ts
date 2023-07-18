import { randomUUID } from 'crypto';
import { Category } from './category.entity';

type Props = {
  name: string;
  price: number;
  category: Category;
};

export class Product {
  private constructor(public props: Props, public readonly id: string) {
    this.id = id ?? randomUUID();
    this.props = props;
  }

  updateName(name: string) {
    this.name = name;
  }

  updatePrice(price: number) {
    this.price = price;
  }

  static create(props: Props, id?: string) {
    return new Product(props, id);
  }

  private set name(value: string) {
    this.props.name = value;
  }

  get name(): string {
    return this.props.name;
  }

  get category(): Category {
    return this.props.category;
  }

  private set price(value: number) {
    this.props.price = value;
  }

  get price(): number {
    return this.props.price;
  }
}
