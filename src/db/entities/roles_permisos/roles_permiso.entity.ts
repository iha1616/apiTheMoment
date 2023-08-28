import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { RolesEntity } from "./roles.entity";
import { PermisosEntity } from "./permisos.entity";

@Entity('roles_permisos')
export class RolesPermisosEntity {
   @PrimaryGeneratedColumn()
   idRolPermiso: number;

   @ManyToOne(() => RolesEntity, (rol) => rol.permisosRol)
   rol: RolesEntity;

   @ManyToOne(() => PermisosEntity, (permiso) => permiso.rolPermisos)
   permiso: PermisosEntity;
}