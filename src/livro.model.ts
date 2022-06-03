import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Livro {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  codigo: string;

  @Column({ nullable: false })
  nome: string;

  @Column({
    type: 'decimal',
    nullable: false,
  })
  preco: number;
}
