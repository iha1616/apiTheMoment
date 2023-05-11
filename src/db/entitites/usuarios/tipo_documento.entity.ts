import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tipo_documento')
export class TipoDocumentoEntity {
   @PrimaryGeneratedColumn()
   idTipoDocumento: number;

   @Column()
   nombreTipoDocumento: string;
}