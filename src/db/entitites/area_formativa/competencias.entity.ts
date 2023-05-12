import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProgramasFormativosEntity } from './programas_formativos.entity';
import { ResultadoAprendizajeEntity } from './resultado_aprendizaje.entity';
import { EntregaFichaEntity } from '../entrega_ficha/entrega_ficha.entity';

@Entity('competencias')
export class CompetenciaEntity {
   @PrimaryGeneratedColumn()
   idCompetencia: number;

   @Column()
   nombreCompetencia: string;

   @Column()
   codigoCompetencia: number;

   @OneToMany(() => ResultadoAprendizajeEntity, (resultadoAprendizaje) => resultadoAprendizaje.idCompetencia)
   resultadosCompetencia: ResultadoAprendizajeEntity[];

   @ManyToOne(() => ProgramasFormativosEntity, (programaFormativo) => programaFormativo.competenciasPrograma)
   @JoinColumn({ name: "idProgramaFormativo" })
   idProgramaFormativo: ProgramasFormativosEntity;

   @OneToMany(() => EntregaFichaEntity, (entrega) => entrega.competencia)
   entregasCompetencia: EntregaFichaEntity[];
}