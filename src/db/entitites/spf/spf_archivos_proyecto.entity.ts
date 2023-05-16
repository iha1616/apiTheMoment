import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TipoArchivoEntity } from './spf_tipo_archivo.entity';
import { GruposProyectoEntity } from './spf_grupos_proyecto.entity';
import { UsuariosEntity } from '../usuarios/usuarios.entity';

@Entity('spf_archivos_proyecto')
export class ArchivosProyectoEntity {
   @PrimaryGeneratedColumn()
   idArchivosProyecto: number;
   
   @Column()
   observacionArchivoProyecto: string;

   @Column({ type: "datetime" })
   fechaHora: Date;

   @Column({ type: "blob" })
   archivoProyecto: string;

   @ManyToOne(() => TipoArchivoEntity, (tipoArchivo) => tipoArchivo.archivosTipo)
   @JoinColumn({ name: "idTipoArchivo" })
   tipoArchivo: TipoArchivoEntity;

   @ManyToOne(() => GruposProyectoEntity, (grupoProyecto) => grupoProyecto.archivosGrupo)
   @JoinColumn({ name: "idGrupoProyecto" })
   grupoArchivo: GruposProyectoEntity;

   @ManyToOne(() => UsuariosEntity, (usuario) => usuario.archivosUsuario)
   @JoinColumn({ name: "idUsuario" })
   usuarioArchivo: UsuariosEntity;
}