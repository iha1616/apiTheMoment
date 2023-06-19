import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AprendicesEntity, ComiteEntity, DecisionesComiteEntity, EstadoQuejasEntity, MotivosComiteEntity, PlanMejoramientoEntity, UsuariosEntity } from '..';

@Entity('quejas_comite')
export class QuejasComiteEntity {
   @PrimaryGeneratedColumn()
   idQueja: number;

   @Column({ type: "blob" })
   archivoQueja: string;
   
   //======== Claves foráneas de otras tablas ========
   @ManyToOne(() => AprendicesEntity, (aprendices) => aprendices.quejasAprendices, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idAprendiz" })
   aprendizQueja: AprendicesEntity;
   
   @ManyToOne(() => UsuariosEntity, (usuario) => usuario.quejasUsuarios, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name : "idUsuario" })
   usuarioQueja: UsuariosEntity;
   
   @Column()
   descripcionMotivo: string;

   @ManyToOne(() => MotivosComiteEntity, (motivoComite) => motivoComite.quejasMotivo, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idMotivoComite" })
   motivoQueja: MotivosComiteEntity;

   @ManyToOne(() => EstadoQuejasEntity, (estadoQueja) => estadoQueja.quejasEstado, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idEstadoQueja" })
   estadoQueja: EstadoQuejasEntity;

   @ManyToOne(() => ComiteEntity, (comite) => comite.quejasComite, { nullable: true, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idComite" })
   comiteQueja: ComiteEntity;

   @ManyToOne(() => DecisionesComiteEntity, (decisionComite) => decisionComite.quejasDecision, { nullable: true, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idDecisionComite" })
   decisionQueja: DecisionesComiteEntity;

   @Column({ nullable: true })
   otraDecision: string;

   @Column({ nullable: true, default: false })
   asisteComite: boolean;

   @Column({ nullable: true })
   otrosInstructores: string;

   //======== Claves foráneas para otras tablas ========
   @OneToMany(() => PlanMejoramientoEntity, (planMejoramiento) => planMejoramiento.quejaPlanMejoramiento)
   planMejoramientoQuejas: PlanMejoramientoEntity[];
}