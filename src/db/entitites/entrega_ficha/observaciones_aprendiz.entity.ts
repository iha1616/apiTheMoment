import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('observaciones_aprendiz')
export class ObservacionesAprendizEntity {
   @PrimaryGeneratedColumn()
   idObservacionAprendiz: number;
   
   @Column()
   trimestre: number;

   @Column({ type: "datetime" })
   fechaHora: Date;

   @Column()
   ObservacionAprendiz: string;

   @Column()
   descripcionMotivo: string;
}