import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { QuejasComiteEntity } from '../quejas/quejas_comite.entity';
import { MotivosComiteEntity } from '../utilities/motivos_comite.entity';
import { EstadoDecisionEntity } from '../utilities/estado_decision.entity';
import { AprendicesEntity } from '../usuarios/aprendices.entity';
import { UsuariosEntity } from '../usuarios/usuarios.entity';

@Entity('plan_mejoramiento')
export class PlanMejoramientoEntity {
   @PrimaryGeneratedColumn()
   idPlanMejoramiento: number;

   @Column({ nullable: true, type: "blob" })
   archivoPlanMejoramiento: string;

   //======== Claves foráneas de otras tablas ========
   @ManyToOne(() => QuejasComiteEntity, (quejas) => quejas.planMejoramientoQuejas, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "IdQueja" })
   quejaPlanMejoramiento: QuejasComiteEntity;

   @ManyToOne(() => UsuariosEntity, (usuario) => usuario.planMejoramientoUsuarios, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idUsuario" })
   usuarioPlanMejoramiento: UsuariosEntity;

   @ManyToOne(() => AprendicesEntity, (aprendices) => aprendices.planMejoramientoAprendices, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idAprendiz" })
   aprendizPlanMejoramiento: AprendicesEntity;
   
   @ManyToOne(() => EstadoDecisionEntity, (estadoDecision) => estadoDecision.planMejoramientoDecisiones, { nullable: true, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idEstadoDecision" })
   decisionPlanMejoramiento: EstadoDecisionEntity;

   @ManyToOne(() => MotivosComiteEntity, (motivoComite) => motivoComite.planMejoramientoMotivos, { nullable: true, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idMotivoComite" })
   motivoPlanMejoramiento: MotivosComiteEntity;
   
   @Column({ nullable: true })
   descripcionMotivo: string;
}