import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  registrationNo: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  course: string;

  @Column()
  role: string;
}
