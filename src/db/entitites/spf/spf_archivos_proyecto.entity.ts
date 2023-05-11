import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}