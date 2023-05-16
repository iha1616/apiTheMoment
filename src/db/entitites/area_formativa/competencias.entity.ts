import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProgramasFormativosEntity } from './programas_formativos.entity';
import { ResultadoAprendizajeEntity } from './resultado_aprendizaje.entity';
import { EntregaFichaEntity } from '../entrega_ficha/entrega_ficha.entity';

@Entity('competencias')
export class CompetenciaEntity {
   @PrimaryGeneratedColumn()
   idCompetencia: number;

   @Column()
   nombreCompetencia: string;

   @Column({ type: "bigint" })
   codigoCompetencia: number;

   @OneToMany(() => ResultadoAprendizajeEntity, (resultadoAprendizaje) => resultadoAprendizaje.competenciaResultado)
   resultadosCompetencia: ResultadoAprendizajeEntity[];

   @ManyToMany(() => ProgramasFormativosEntity, (programaFormativo) => programaFormativo.competenciaPrograma)
   programasCompetencia: ProgramasFormativosEntity[];

   @OneToMany(() => EntregaFichaEntity, (entregaFicha) => entregaFicha.competenciaEntregaFicha)
   entregasFichaCompetencia: EntregaFichaEntity[];
}