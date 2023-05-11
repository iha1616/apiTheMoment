import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('programas_formativos')
export class ProgramasFormativosEntity {
   @PrimaryGeneratedColumn()
   idProgramaFormativo: number;

   @Column()
   nombrePF: string;

   @Column()
   codigoPF: number;

   @Column()
   trimestres: number;
}