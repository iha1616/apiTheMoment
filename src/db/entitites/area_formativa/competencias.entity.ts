import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('competencias')
export class CompetenciaEntity {
   @PrimaryGeneratedColumn()
   idCompetencia: number;

   @Column()
   nombreCompetencia: string;

   @Column()
   codigoCompetencia: number;
}