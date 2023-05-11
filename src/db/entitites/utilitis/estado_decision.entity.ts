import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('estado_decision')
export class EstadoDecisionEntity {
   @PrimaryGeneratedColumn()
   idEstadoDecision: number;

   @Column()
   nombreEstadoDecision: string;
}