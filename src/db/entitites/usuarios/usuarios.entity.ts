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

   @Column({ unique: true })
   documento: number;

   @Column()
   nombre: string;

   @Column()
   apellidos: string;

   @Column({ unique: true })
   email: string;

   @Column()
   telefono: number;

   @Column()
   password: string;

   @ManyToOne(() => TipoDocumentoEntity, (tipoDoc) => tipoDoc.usuariosTipoDoc)
   @JoinColumn({ name: "idTipoDocumento" })
   usuarioTipoDocumento: TipoDocumentoEntity;

   @ManyToOne(() => RolesEntity, (rol) => rol.usuariosRol)
   @JoinColumn({ name: "idRol" })
   usuarioRol: RolesEntity;

   @OneToMany(() => AprendicesEntity, (aprendiz) => aprendiz.aprendiz)
   usuarioAprendiz: AprendicesEntity[];

   @ManyToMany(() => ProgramasFormativosEntity, (programaFormativo) => programaFormativo.usuariosPrograma)
   programasUsuarios: ProgramasFormativosEntity[];

   @OneToMany(() => ArchivosProyectoEntity, (archivo) => archivo.archivoUsuario)
   usuarioArchivos: ArchivosProyectoEntity[];

   @OneToMany(() => EntregaFichaEntity, (entrega) => entrega.usuario)
   entregasUsuario: EntregaFichaEntity[];

   @OneToMany(() => ObservacionesAprendizEntity, (observacionesAprendiz) => observacionesAprendiz.usuarioObservacion)
   observacionesAprendiz: ObservacionesAprendizEntity[];

   @OneToMany(() => QuejasComiteEntity, (quejas) => quejas.quejaUsuario)
   usuariosQuejas: QuejasComiteEntity[];

   @OneToMany(() => PlanMejoramientoEntity, (planMejoramiento) => planMejoramiento.planUsuario)
   planesUsuarios: PlanMejoramientoEntity[];
}