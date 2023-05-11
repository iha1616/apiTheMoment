import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('spf_tipo_archivo')
export class TipoArchivoEntity {
   @PrimaryGeneratedColumn()
   idTipoArchivo: number;

   @Column()
   nombreTipoArchivo: string;
}