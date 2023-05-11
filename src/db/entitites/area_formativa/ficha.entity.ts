import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('fichas')
export class FichasEntity {
   @PrimaryGeneratedColumn()
   idFicha: number;

   @Column()
   codigoFicha: number;

   @Column({ nullable: true })
   voceroFicha: string;
}