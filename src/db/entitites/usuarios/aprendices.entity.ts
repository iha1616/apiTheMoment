import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UsuariosEntity } from './usuarios.entity';
import { FichasEntity } from '../area_formativa/ficha.entity';
import { GruposProyectoEntity } from '../spf/spf_grupos_proyecto.entity';
import { ObservacionesAprendizEntity } from '../entrega_ficha/observaciones_aprendiz.entity';
import { QuejasComiteEntity } from '../quejas/quejas_comite.entity';
import { PlanMejoramientoEntity } from '../plan_mejoramiento/plan_mejoramiento.entity';

@Entity('aprendices')
export class AprendicesEntity {
   @PrimaryGeneratedColumn()
   idAprendiz: number;

   @Column({ default: true })
   estadoAprendiz: boolean;

   @ManyToOne(() => UsuariosEntity, (usuario) => usuario.aprendicesUsuario)
   @JoinColumn({ name: "idUsuario" })
   usuarioAprendiz: UsuariosEntity;

   @ManyToOne(() => FichasEntity, (fichas) => fichas.aprendicesFicha)
   @JoinColumn({ name: "idFicha" })
   fichaAprendiz: FichasEntity;

   @ManyToOne(() => GruposProyectoEntity, (grupoProyecto) => grupoProyecto.aprendicesGrupo)
   @JoinColumn({ name: "idGrupoProyecto" })
   grupoAprendiz: GruposProyectoEntity;

   @OneToMany(() => ObservacionesAprendizEntity, (observacionesAprendiz) => observacionesAprendiz.aprendizObservacion)
   observacionesAprendiz: ObservacionesAprendizEntity[];

   @OneToMany(() => QuejasComiteEntity, (quejas) => quejas.aprendizQueja)
   quejasAprendices: QuejasComiteEntity[];

   @OneToMany(() => PlanMejoramientoEntity, (planMejoramiento) => planMejoramiento.aprendizPlanMejoramiento)
   planMejoramientoAprendices: PlanMejoramientoEntity[];
}