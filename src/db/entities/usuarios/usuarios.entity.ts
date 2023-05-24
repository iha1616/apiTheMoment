import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TipoDocumentoEntity } from "./tipo_documento.entity";
import { RolesEntity } from "../roles_permisos/roles.entity";
import { AprendicesEntity } from "./aprendices.entity";
import { ProgramasFormativosEntity } from "../area_formativa/programas_formativos.entity";
import { ArchivosProyectoEntity } from "../spf/spf_archivos_proyecto.entity";
import { EntregaFichaEntity } from "../entrega_ficha/entrega_ficha.entity";
import { ObservacionesAprendizEntity } from "../entrega_ficha/observaciones_aprendiz.entity";
import { QuejasComiteEntity } from "../quejas/quejas_comite.entity";
import { PlanMejoramientoEntity } from "../plan_mejoramiento/plan_mejoramiento.entity";

@Entity('usuarios')
export class UsuariosEntity {
   @PrimaryGeneratedColumn()
   idUsuario: number;

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

   //======== Claves foráneas de otras tablas ========
   @ManyToOne(() => TipoDocumentoEntity, (tipoDocumento) => tipoDocumento.usuariosTipoDocumento, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idTipoDocumento" })
   tipoDocumentoUsuario: TipoDocumentoEntity;

   @ManyToOne(() => RolesEntity, (rol) => rol.usuariosRol, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idRol" })
   rolUsuario: RolesEntity;

   //======== Claves foráneas para otras tablas ========
   @ManyToMany(() => ProgramasFormativosEntity, (programaFormativo) => programaFormativo.usuariosPrograma)
   programaUsuarios: ProgramasFormativosEntity[];

   @OneToMany(() => ArchivosProyectoEntity, (archivosProyecto) => archivosProyecto.usuarioArchivo)
   archivosUsuario: ArchivosProyectoEntity[];

   @OneToMany(() => EntregaFichaEntity, (entregaFicha) => entregaFicha.usuarioEntregaFicha)
   entregasFichaUsuario: EntregaFichaEntity[];

   @OneToMany(() => ObservacionesAprendizEntity, (observacionesAprendiz) => observacionesAprendiz.usuarioObservacion)
   observacionesUsuario: ObservacionesAprendizEntity[];

   @OneToMany(() => QuejasComiteEntity, (quejas) => quejas.usuarioQueja)
   quejasUsuarios: QuejasComiteEntity[];

   @OneToMany(() => PlanMejoramientoEntity, (planMejoramiento) => planMejoramiento.usuarioPlanMejoramiento)
   planMejoramientoUsuarios: PlanMejoramientoEntity[];
}