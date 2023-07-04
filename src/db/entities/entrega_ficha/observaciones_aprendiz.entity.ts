import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AprendicesEntity, EstadoDecisionEntity, QuejasComiteEntity, UsuariosEntity } from '..';

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

   //======== Claves foráneas para otras tablas ========
}