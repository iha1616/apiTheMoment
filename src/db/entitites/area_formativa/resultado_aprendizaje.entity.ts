import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('resultado_aprendizaje')
export class ResultadoAprendizajeEntity {
   @PrimaryGeneratedColumn()
   idResultadoAprendizaje: number;

   @Column()
   nombreRA: string;

   @Column()
   codigoRA: number;
}