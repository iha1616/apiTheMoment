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

   @ManyToOne(() => QuejasComiteEntity, (quejas) => quejas.planMejoramientoQuejas)
   @JoinColumn({ name: "IdQueja" })
   quejaPlanMejoramiento: QuejasComiteEntity;

   @ManyToOne(() => MotivosComiteEntity, (motivoComite) => motivoComite.planMejoramientoMotivos)
   @JoinColumn({ name: "idMotivoComite" })
   motivoPlanMejoramiento: MotivosComiteEntity;

   @ManyToOne(() => EstadoDecisionEntity, (estadoDecision) => estadoDecision.planMejoramientoDecisiones)
   @JoinColumn({ name: "idEstadoDecision" })
   decisionPlanMejoramiento: EstadoDecisionEntity;

   @ManyToOne(() => AprendicesEntity, (aprendices) => aprendices.planMejoramientoAprendices)
   @JoinColumn({ name: "idAprendiz" })
   aprendizPlanMejoramiento: AprendicesEntity;

   @ManyToOne(() => UsuariosEntity, (usuario) => usuario.planMejoramientoUsuarios)
   @JoinColumn({ name: "idUsuario" })
   usuarioPlanMejoramiento: UsuariosEntity;
}