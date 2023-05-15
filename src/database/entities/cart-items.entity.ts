import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  PrimaryColumn,
} from 'typeorm';
import { Carts } from './carts.entity';

@Entity()
export class CartItems {
  @Column({ type: 'uuid' })
  product_id: string;

  @Column({ type: 'integer' })
  count: string;

  @OneToMany(() => Carts, (cart) => cart.id)
  @JoinColumn({ name: 'id', referencedColumnName: 'cart_id' })
  @PrimaryColumn()
  cart_id: string
}
