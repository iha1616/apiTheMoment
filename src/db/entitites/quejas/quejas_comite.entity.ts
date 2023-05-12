import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MotivosComiteEntity } from '../utilitis/motivos_comite.entity';
import { EstadoQuejasEntity } from './estados_quejas.entity';
import { ComiteEntity } from '../comite/comite.entity';
import { AprendicesEntity } from '../usuarios/aprendices.entity';
import { UsuariosEntity } from '../usuarios/usuarios.entity';
import { PlanMejoramientoEntity } from '../plan_mejoramiento/plan_mejoramiento.entity';

@Entity('quejas_comite')
export class QuejasComiteEntity {
   @PrimaryGeneratedColumn()
   idQueja: number;
   
   @Column()
   descripcionMotivo: string;

   @Column({ nullable: true })
   decisionComite: string;

   @ManyToOne(() => MotivosComiteEntity, (motivoComite) => motivoComite.motivosQuejas)
   @JoinColumn({ name: "idMotivoComite" })
   quejaMotivo: MotivosComiteEntity;

   @ManyToOne(() => EstadoQuejasEntity, (estadoQueja) => estadoQueja.estadosQuejas)
   @JoinColumn({ name: "idEstadoQueja" })
   quejaEstado: EstadoQuejasEntity;

   @ManyToOne(() => ComiteEntity, (comite) => comite.comitesQuejas)
   @JoinColumn({ name: "idComite" })
   quejaComite: ComiteEntity;

   @ManyToOne(() => AprendicesEntity, (aprendices) => aprendices.aprendizQuejas)
   @JoinColumn({ name: "idAprendiz" })
   quejaAprendiz: AprendicesEntity;

   @ManyToOne(() => UsuariosEntity, (usuario) => usuario.usuariosQuejas)
   @JoinColumn({ name : "idUsuario" })
   quejaUsuario: UsuariosEntity;

   @OneToMany(() => PlanMejoramientoEntity, (planMejoramiento) => planMejoramiento.planQueja)
   quejasPlanMejoramiento: PlanMejoramientoEntity[];
}