import { Column, DataType, Model, Table } from "sequelize-typescript";


@Table({
  tableName: "products",
})
class Product extends Model {
  @Column({
    type: DataType.STRING(100)
  })
  name: string;

  @Column({
    type: DataType.FLOAT
  })
  price: number;

  @Column({
    type: DataType.BOOLEAN
  })
  availability: boolean;

  constructor(name: string, price: number, availability: boolean) {
    super();
    this.name = name;
    this.price = price;
    this.availability = availability;
  }
}

export default Product;
