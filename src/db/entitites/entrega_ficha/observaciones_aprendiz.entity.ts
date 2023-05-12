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

   @ManyToOne(() => EstadoDecisionEntity, (estadoDecision) => estadoDecision.decisiones)
   @JoinColumn({ name: "idEstadoDecision" })
   decisionAprendiz: EstadoDecisionEntity;

   @ManyToOne(() => MotivosComiteEntity, (motivoComite) => motivoComite.motivos)
   @JoinColumn({ name: "idMotivoComite" })
   motivoAprendiz: MotivosComiteEntity;

   @ManyToOne(() => AprendicesEntity, (aprendiz) => aprendiz.aprendicesObservacion)
   @JoinColumn({ name: "idAprendiz" })
   observacionAprendiz: AprendicesEntity;

   @ManyToOne(() => UsuariosEntity, (usuario) => usuario.observacionesAprendiz)
   @JoinColumn({ name: "idUsuario" })
   usuarioObservacion: UsuariosEntity;
}