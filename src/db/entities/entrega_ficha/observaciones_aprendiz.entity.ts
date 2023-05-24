import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { EstadoDecisionEntity } from '../utilities/estado_decision.entity';
import { MotivosComiteEntity } from '../utilities/motivos_comite.entity';
import { AprendicesEntity } from '../usuarios/aprendices.entity';
import { UsuariosEntity } from '../usuarios/usuarios.entity';

@Entity('observaciones_aprendiz')
export class ObservacionesAprendizEntity {
   @PrimaryGeneratedColumn()
   idObservacionAprendiz: number;
   
   @Column()
   trimestre: number;

   @Column({ type: "datetime", default: () => 'CURRENT_TIMESTAMP' })
   fechaHora: Date;

   @Column()
   ObservacionAprendiz: string;

   //======== Claves foráneas de otras tablas ========
   @ManyToOne(() => AprendicesEntity, (aprendiz) => aprendiz.observacionesAprendiz, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idAprendiz" })
   aprendizObservacion: AprendicesEntity;

   @ManyToOne(() => UsuariosEntity, (usuario) => usuario.observacionesUsuario, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idUsuario" })
   usuarioObservacion: UsuariosEntity;

   @ManyToOne(() => EstadoDecisionEntity, (estadoDecision) => estadoDecision.observacionesDecision, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idEstadoDecision" })
   decisionObservacion: EstadoDecisionEntity;

   @ManyToOne(() => MotivosComiteEntity, (motivoComite) => motivoComite.observacionesMotivo, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idMotivoComite" })
   motivoObservacion: MotivosComiteEntity;

   @Column({ nullable: true })
   descripcionMotivo: string;
}