import { Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RolesEntity } from "./roles.entity";
import { PermisosEntity } from "./permisos.entity";

@Entity('roles_permisos')
export class RolesPermisosEntity {
   @PrimaryGeneratedColumn()
   idRolPermiso: number;

   @ManyToOne(() => RolesEntity, (rol) => rol.permisos)
   @JoinColumn({ name: "idRol" })
   idRol: RolesEntity;

   @ManyToOne(() => PermisosEntity, (permisos) => permisos.roles)
   @JoinColumn({ name: "idPermiso" })
   idPermiso: PermisosEntity;
}