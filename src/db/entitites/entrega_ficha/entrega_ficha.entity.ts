import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('entrega_ficha')
export class EntregaFichaEntity {
   @PrimaryGeneratedColumn()
   idEntregaFicha: number;

   @Column()
   ObservacionFicha: string;

   @Column()
   trimestre: number;

   @Column({ type: "datetime" })
   fechaHora: Date;
}