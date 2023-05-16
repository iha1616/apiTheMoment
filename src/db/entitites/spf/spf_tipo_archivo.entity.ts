import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ArchivosProyectoEntity } from "./spf_archivos_proyecto.entity";

@Entity('spf_tipo_archivo')
export class TipoArchivoEntity {
   @PrimaryGeneratedColumn()
   idTipoArchivo: number;

   @Column()
   nombreTipoArchivo: string;

   @OneToMany(() => ArchivosProyectoEntity, (proyectoArchivo) => proyectoArchivo.tipoArchivo)
   archivosTipo: ArchivosProyectoEntity[];
}