import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CompetenciaEntity } from './competencias.entity';
import { EntregaFichaEntity } from '../entrega_ficha/entrega_ficha.entity';

@Entity('resultado_aprendizaje')
export class ResultadoAprendizajeEntity {
   @PrimaryGeneratedColumn()
   idResultadoAprendizaje: number;

   @Column()
   nombreRA: string;

   @Column({ type: "bigint" })
   codigoRA: number;

   @ManyToOne(() => CompetenciaEntity, (competencia) => competencia.resultadosCompetencia)
   @JoinColumn({ name: "IdCompetencia" })
   competenciaResultado: CompetenciaEntity;

   @OneToMany(() => EntregaFichaEntity, (entregaFicha) => entregaFicha.resultadoEntregaFicha)
   entregasFichaResultado: EntregaFichaEntity[];
}