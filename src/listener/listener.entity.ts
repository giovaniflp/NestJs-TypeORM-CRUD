import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Listener {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  listener: string;

  @Column()
  password: string;

  @Column()
  email: string;
}
