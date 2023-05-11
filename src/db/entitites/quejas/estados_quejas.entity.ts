import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('estado_quejas')
export class EstadoQuejasEntity {
   @PrimaryGeneratedColumn()
   idEstadoQuejas: number;

   @Column()
   nombreEstadoQuejas: string;
}