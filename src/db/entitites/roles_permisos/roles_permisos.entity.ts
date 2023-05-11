import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('roles_permisos')
export class RolesPermisosEntity {
   @PrimaryGeneratedColumn()
   idRolPermiso: number;
}