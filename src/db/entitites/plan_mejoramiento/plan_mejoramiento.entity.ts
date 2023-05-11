import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('plan_mejoramiento')
export class PlanMejoramientoEntity {
   @PrimaryGeneratedColumn()
   idPlanMejoramiento: number;

   @Column({ nullable: true, type: "blob" })
   archivoPlanMejoramiento: string;

   @Column({ nullable: true })
   descripcionMotivo: string;
}