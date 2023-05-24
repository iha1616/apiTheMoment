import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { GruposProyectoEntity } from './spf_grupos_proyecto.entity';
import { UsuariosEntity } from '../usuarios/usuarios.entity';
import { ResultadoAprendizajeEntity } from '../area_formativa/resultado_aprendizaje.entity';
import { CompetenciaEntity } from '../area_formativa/competencias.entity';

@Entity('spf_archivos_proyecto')
export class ArchivosProyectoEntity {
   @PrimaryGeneratedColumn()
   idArchivosProyecto: number;
   
   @Column({ type: "blob" })
   archivoProyecto: string;

   @Column()
   nombreArchivo: string;

   @Column()
   observacionArchivoProyecto: string;

   @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
   fechaHora: Date;
   
   //======== Claves foráneas de otras tablas ========
   @ManyToOne(() => UsuariosEntity, (usuario) => usuario.archivosUsuario, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idUsuario" })
   usuarioArchivo: UsuariosEntity;

   @ManyToOne(() => CompetenciaEntity, (competencia) => competencia.archivoCompetencia, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idCompetencia" })
   competenciaArchivo: CompetenciaEntity;

   @ManyToOne(() => ResultadoAprendizajeEntity, (resultadoAprendizaje) => resultadoAprendizaje.archivoResultado, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idResultadoAprendizaje" })
   resultadoArchivo: ResultadoAprendizajeEntity;

   @ManyToOne(() => GruposProyectoEntity, (grupoProyecto) => grupoProyecto.archivosGrupo, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idGrupoProyecto" })
   grupoArchivo: GruposProyectoEntity;
}