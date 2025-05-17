import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../enums/role.enums';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ enum: Role, default: Role.Regular })
  role: Role;
}
