import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProgramasFormativosEntity } from './programas_formativos.entity';
import { ResultadoAprendizajeEntity } from './resultado_aprendizaje.entity';
import { EntregaFichaEntity } from '../entrega_ficha/entrega_ficha.entity';
import { ArchivosProyectoEntity } from '../spf/spf_archivos_proyecto.entity';

@Entity('competencias')
export class CompetenciaEntity {
   @PrimaryGeneratedColumn()
   idCompetencia: number;

   @Column()
   nombreCompetencia: string;

   @Column({ type: "bigint" })
   codigoCompetencia: number;

   //======== Claves foráneas de otras tablas ========
   @ManyToOne(() => ProgramasFormativosEntity, (programaFormativo) => programaFormativo.competenciaPrograma, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idProgramaFormativo" })
   programasCompetencia: ProgramasFormativosEntity;

   //======== Claves foráneas para otras tablas ========
   @OneToMany(() => ResultadoAprendizajeEntity, (resultadoAprendizaje) => resultadoAprendizaje.competenciaResultado)
   resultadosCompetencia: ResultadoAprendizajeEntity[];

   @OneToMany(() => EntregaFichaEntity, (entregaFicha) => entregaFicha.competenciaEntregaFicha)
   entregasFichaCompetencia: EntregaFichaEntity[];

   @OneToMany(() => ArchivosProyectoEntity, (archivosProyecto) => archivosProyecto.competenciaArchivo)
   archivoCompetencia: ArchivosProyectoEntity[];
}