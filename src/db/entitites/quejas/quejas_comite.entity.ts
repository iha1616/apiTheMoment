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

   @ManyToOne(() => MotivosComiteEntity, (motivoComite) => motivoComite.quejasMotivo)
   @JoinColumn({ name: "idMotivoComite" })
   motivoQueja: MotivosComiteEntity;

   @ManyToOne(() => EstadoQuejasEntity, (estadoQueja) => estadoQueja.quejasEstado)
   @JoinColumn({ name: "idEstadoQueja" })
   estadoQueja: EstadoQuejasEntity;

   @ManyToOne(() => ComiteEntity, (comite) => comite.quejasComite)
   @JoinColumn({ name: "idComite" })
   comiteQueja: ComiteEntity;

   @ManyToOne(() => AprendicesEntity, (aprendices) => aprendices.quejasAprendices)
   @JoinColumn({ name: "idAprendiz" })
   aprendizQueja: AprendicesEntity;

   @ManyToOne(() => UsuariosEntity, (usuario) => usuario.quejasUsuarios)
   @JoinColumn({ name : "idUsuario" })
   usuarioQueja: UsuariosEntity;

   @OneToMany(() => PlanMejoramientoEntity, (planMejoramiento) => planMejoramiento.quejaPlanMejoramiento)
   planMejoramientoQuejas: PlanMejoramientoEntity[];
}