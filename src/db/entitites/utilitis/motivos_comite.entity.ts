import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('motivos_comite')
export class MotivosComiteEntity {
   @PrimaryGeneratedColumn()
   idMotivoComite: number;

   @Column()
   nombreMotivo: string;
}