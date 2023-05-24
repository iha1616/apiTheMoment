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

   //======== Claves foráneas para otras tablas ========
   @OneToMany(() => ObservacionesAprendizEntity, (motivosComite) => motivosComite.motivoObservacion)
   observacionesMotivo: ObservacionesAprendizEntity[];

   @OneToMany(() => QuejasComiteEntity, (quejas) => quejas.motivoQueja)
   quejasMotivo: QuejasComiteEntity[];

   @OneToMany(() => PlanMejoramientoEntity, (planMejoramiento) => planMejoramiento.motivoPlanMejoramiento)
   planMejoramientoMotivos: PlanMejoramientoEntity[];
}