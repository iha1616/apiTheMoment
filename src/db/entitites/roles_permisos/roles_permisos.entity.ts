import { Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RolesEntity } from "./roles.entity";
import { PermisosEntity } from "./permisos.entity";

@Entity('roles_permisos')
export class RolesPermisosEntity {
   @PrimaryGeneratedColumn()
   idRolPermiso: number;

   @ManyToOne(() => RolesEntity, (rol) => rol.permisosRol)
   @JoinColumn({ name: "idRol" })
   rol: RolesEntity;

   @ManyToOne(() => PermisosEntity, (permisos) => permisos.rolPermisos)
   @JoinColumn({ name: "idPermiso" })
   permiso: PermisosEntity;
}