import { randomUUID } from 'crypto';

type Props = {
  name: string;
};

export class Category {
  private constructor(private props: Props, public readonly id: string) {
    this.props = props;
    this.id = id ?? randomUUID();
  }

  updateName(name: string) {
    this.name = name;
  }

  static create(props: Props, id?: string) {
    return new Category(props, id);
  }

  get name() {
    return this.props.name;
  }

  private set name(value: string) {
    this.props.name = value;
  }
}
