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

   @ManyToOne(() => UsuariosEntity, (usuario) => usuario.usuarioAprendiz)
   @JoinColumn({ name: "idUsuario" })
   aprendiz: UsuariosEntity;

   @ManyToOne(() => FichasEntity, (fichas) => fichas.aprendicesFicha)
   @JoinColumn({ name: "idFicha" })
   idFichaAprendiz: FichasEntity;

   @ManyToOne(() => GruposProyectoEntity, (grupoProyecto) => grupoProyecto.aprendicesGrupo)
   @JoinColumn({ name: "idGrupoProyecto" })
   idGrupoProyecto: GruposProyectoEntity;

   @OneToMany(() => ObservacionesAprendizEntity, (observacionesAprendiz) => observacionesAprendiz.observacionAprendiz)
   aprendicesObservacion: ObservacionesAprendizEntity[];

   @OneToMany(() => QuejasComiteEntity, (quejas) => quejas.quejaAprendiz)
   aprendizQuejas: QuejasComiteEntity[];

   @OneToMany(() => PlanMejoramientoEntity, (planMejoramiento) => planMejoramiento.planAprendiz)
   planesAprendices: PlanMejoramientoEntity[];
}