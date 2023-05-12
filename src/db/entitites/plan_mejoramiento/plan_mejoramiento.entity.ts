import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { QuejasComiteEntity } from '../quejas/quejas_comite.entity';
import { MotivosComiteEntity } from '../utilitis/motivos_comite.entity';
import { EstadoDecisionEntity } from '../utilitis/estado_decision.entity';
import { AprendicesEntity } from '../usuarios/aprendices.entity';
import { UsuariosEntity } from '../usuarios/usuarios.entity';

@Entity('plan_mejoramiento')
export class PlanMejoramientoEntity {
   @PrimaryGeneratedColumn()
   idPlanMejoramiento: number;

   @Column({ nullable: true, type: "blob" })
   archivoPlanMejoramiento: string;

   @Column({ nullable: true })
   descripcionMotivo: string;

   @ManyToOne(() => QuejasComiteEntity, (quejas) => quejas.quejasPlanMejoramiento)
   @JoinColumn({ name: "IdQueja" })
   planQueja: QuejasComiteEntity;

   @ManyToOne(() => MotivosComiteEntity, (motivoComite) => motivoComite.motivosPlanMejoramiento)
   @JoinColumn({ name: "idMotivoComite" })
   planMotivo: MotivosComiteEntity;

   @ManyToOne(() => EstadoDecisionEntity, (estadoDecision) => estadoDecision.estadoDecisionPlan)
   @JoinColumn({ name: "idEstadoDecision" })
   planEstadoDecision: EstadoDecisionEntity;

   @ManyToOne(() => AprendicesEntity, (aprendices) => aprendices.planesAprendices)
   @JoinColumn({ name: "idAprendiz" })
   planAprendiz: AprendicesEntity;

   @ManyToOne(() => UsuariosEntity, (usuario) => usuario.planesUsuarios)
   @JoinColumn({ name: "idUsuario" })
   planUsuario: UsuariosEntity;
}