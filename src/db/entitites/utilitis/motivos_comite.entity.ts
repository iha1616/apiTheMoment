import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ObservacionesAprendizEntity } from "../entrega_ficha/observaciones_aprendiz.entity";
import { QuejasComiteEntity } from "../quejas/quejas_comite.entity";
import { PlanMejoramientoEntity } from "../plan_mejoramiento/plan_mejoramiento.entity";

@Entity('motivos_comite')
export class MotivosComiteEntity {
   @PrimaryGeneratedColumn()
   idMotivoComite: number;

   @Column()
   nombreMotivo: string;

   @OneToMany(() => ObservacionesAprendizEntity, (motivosAprendices) => motivosAprendices.motivoAprendiz)
   motivos: ObservacionesAprendizEntity[];

   @OneToMany(() => QuejasComiteEntity, (quejas) => quejas.quejaMotivo)
   motivosQuejas: QuejasComiteEntity[];

   @OneToMany(() => PlanMejoramientoEntity, (planMejoramiento) => planMejoramiento.planMotivo)
   motivosPlanMejoramiento: PlanMejoramientoEntity[];
}