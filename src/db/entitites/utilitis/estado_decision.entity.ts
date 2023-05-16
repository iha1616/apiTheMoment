import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ObservacionesAprendizEntity } from "../entrega_ficha/observaciones_aprendiz.entity";
import { PlanMejoramientoEntity } from "../plan_mejoramiento/plan_mejoramiento.entity";

@Entity('estado_decision')
export class EstadoDecisionEntity {
   @PrimaryGeneratedColumn()
   idEstadoDecision: number;

   @Column()
   nombreEstadoDecision: string;

   @OneToMany(() => ObservacionesAprendizEntity, (observacionesAprendiz) => observacionesAprendiz.decisionObservacion)
   observacionesDecision: ObservacionesAprendizEntity[];

   @OneToMany(() => PlanMejoramientoEntity, (planMejoramiento) => planMejoramiento.decisionPlanMejoramiento)
   planMejoramientoDecisiones: PlanMejoramientoEntity[];
}