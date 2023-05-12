import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CompetenciaEntity } from './competencias.entity';
import { EntregaFichaEntity } from '../entrega_ficha/entrega_ficha.entity';

@Entity('resultado_aprendizaje')
export class ResultadoAprendizajeEntity {
   @PrimaryGeneratedColumn()
   idResultadoAprendizaje: number;

   @Column()
   nombreRA: string;

   @Column()
   codigoRA: number;

   @ManyToOne(() => CompetenciaEntity, (competencia) => competencia.resultadosCompetencia)
   @JoinColumn({ name: "IdCompetencia" })
   idCompetencia: CompetenciaEntity;

   @OneToMany(() => EntregaFichaEntity, (entrega) => entrega.resultadoAprendizaje)
   entregasResultadoAprendizaje: EntregaFichaEntity[];
}