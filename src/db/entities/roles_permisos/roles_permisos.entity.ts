import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RolesEntity } from "./roles.entity";
import { PermisosEntity } from "./permisos.entity";

@Entity('roles_permisos')
export class RolesPermisosEntity {
   @PrimaryGeneratedColumn()
   idRolPermiso: number;

   @Column()
   tipoPermisoRol: string;

   //======== Claves foráneas de otras tablas ========
   @ManyToOne(() => RolesEntity, (rol) => rol.permisosRol, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idRol" })
   rol: RolesEntity;

   @ManyToOne(() => PermisosEntity, (permisos) => permisos.rolPermisos, { nullable: false, onUpdate: "CASCADE", onDelete: "CASCADE" })
   @JoinColumn({ name: "idPermiso" })
   permiso: PermisosEntity;
}