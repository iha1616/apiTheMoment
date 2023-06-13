import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ArchivosProyectoEntity, EntregaFichaEntity, ProgramasFormativosEntity, ResultadoAprendizajeEntity } from '..';

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