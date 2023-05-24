import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UsuariosEntity } from './usuarios.entity';
import { FichasEntity } from '../area_formativa/ficha.entity';
import { GruposProyectoEntity } from '../spf/spf_grupos_proyecto.entity';
import { ObservacionesAprendizEntity } from '../entrega_ficha/observaciones_aprendiz.entity';
import { QuejasComiteEntity } from '../quejas/quejas_comite.entity';
import { PlanMejoramientoEntity } from '../plan_mejoramiento/plan_mejoramiento.entity';
import { TipoDocumentoEntity } from './tipo_documento.entity';
import { RolesEntity } from '../roles_permisos/roles.entity';

@Entity('aprendices')
export class AprendicesEntity {
   @PrimaryGeneratedColumn()
   idAprendiz: number;

   @Column({ unique: true, type: "bigint" })
   documento: number;

   @Column()
   nombre: string;

   @Column()
   apellidos: string;

   @Column({ unique: true })
   email: string;

   @Column({ type: "bigint" })
   telefono: number;

   @Column()
   password: string;

   @Column({ default: true })
   estadoAprendiz: boolean;

   //======== Claves foráneas de otras tablas ========
   @ManyToOne(() => TipoDocumentoEntity, (tipoDocumento) => tipoDocumento.aprendicesTipoDocumento, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idTipoDocumento" })
   tipoDocumentoAprendiz: TipoDocumentoEntity;

   @ManyToOne(() => RolesEntity, (roles) => roles.aprendicesRol, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idRol" })
   rolAprendiz: RolesEntity;

   @ManyToOne(() => FichasEntity, (fichas) => fichas.aprendicesFicha, { nullable: true, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idFicha" })
   fichaAprendiz: FichasEntity;

   @ManyToOne(() => GruposProyectoEntity, (grupoProyecto) => grupoProyecto.aprendicesGrupo, { nullable: true, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idGrupoProyecto" })
   grupoAprendiz: GruposProyectoEntity;

   //======== Claves foráneas para otras tablas ========
   @OneToMany(() => ObservacionesAprendizEntity, (observacionesAprendiz) => observacionesAprendiz.aprendizObservacion)
   observacionesAprendiz: ObservacionesAprendizEntity[];

   @OneToMany(() => QuejasComiteEntity, (quejas) => quejas.aprendizQueja)
   quejasAprendices: QuejasComiteEntity[];

   @OneToMany(() => PlanMejoramientoEntity, (planMejoramiento) => planMejoramiento.aprendizPlanMejoramiento)
   planMejoramientoAprendices: PlanMejoramientoEntity[];
}