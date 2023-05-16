import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { EstadoDecisionEntity } from '../utilitis/estado_decision.entity';
import { MotivosComiteEntity } from '../utilitis/motivos_comite.entity';
import { AprendicesEntity } from '../usuarios/aprendices.entity';
import { UsuariosEntity } from '../usuarios/usuarios.entity';

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

   @ManyToOne(() => EstadoDecisionEntity, (estadoDecision) => estadoDecision.observacionesDecision)
   @JoinColumn({ name: "idEstadoDecision" })
   decisionObservacion: EstadoDecisionEntity;

   @ManyToOne(() => MotivosComiteEntity, (motivoComite) => motivoComite.observacionesMotivo)
   @JoinColumn({ name: "idMotivoComite" })
   motivoObservacion: MotivosComiteEntity;

   @ManyToOne(() => AprendicesEntity, (aprendiz) => aprendiz.observacionesAprendiz)
   @JoinColumn({ name: "idAprendiz" })
   aprendizObservacion: AprendicesEntity;

   @ManyToOne(() => UsuariosEntity, (usuario) => usuario.observacionesUsuario)
   @JoinColumn({ name: "idUsuario" })
   usuarioObservacion: UsuariosEntity;
}