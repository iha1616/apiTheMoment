import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('comite')
export class ComiteEntity {
   @PrimaryGeneratedColumn()
   idComite: number;

   @Column({ type: "datetime" })
   fechaHora: Date;

   @Column()
   codigoComite: number;
}